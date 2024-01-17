import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';
import { HubConnectionBuilder, HubConnection } from '@microsoft/signalr';
import { BaseMessage } from '../models/messages/base.message';

export abstract class BaseHubService<T extends BaseMessage> {
	private _hubUrl: string;
	protected connection: HubConnection;
	public message: BehaviorSubject<T>;

	constructor(hubName: string) {
		this._hubUrl = `${environment.apiUrl}/hubs/${hubName}`;

		this.message = new BehaviorSubject<T>({
			user: null,
			message: null
		} as any as T);

		this.connection = new HubConnectionBuilder()
			.withUrl(this._hubUrl)
			.withAutomaticReconnect()
			.build();
	}

	public async start(): Promise<boolean> {
		try {
			await this.connection.start();
			this.setClientMethods();

			return true;
		}
		catch (e) {
			console.log(e);
			return false;
		}
	}

	public async stop(): Promise<boolean> {
		try {
			await this.connection.stop();

			return true;
		}
		catch (e) {
			console.log(e);
			return false;
		}
	}

	protected abstract setClientMethods(): void;
}
