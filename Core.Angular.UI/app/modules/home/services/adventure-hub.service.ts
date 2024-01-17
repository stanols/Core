import { Injectable } from '@angular/core';
import { BaseHubService } from "app/modules/common/services/base-hub.service";
import { AdventureMessage } from "../models/messages/adventure.message";

@Injectable()
export class AdventureHubService extends BaseHubService<AdventureMessage> {
	constructor() {
		super("AdventureHub");
	}

	public async sendMessageToAll(message: AdventureMessage): Promise<AdventureMessage> {
		return await this.connection.invoke<AdventureMessage>(
			"SendMessageToAll",
			message
		);
	}

	protected setClientMethods(): void {
		this.connection.on("ReceiveMessage", (message: AdventureMessage) => {
			this.message.next(message);
		});
	}
}
