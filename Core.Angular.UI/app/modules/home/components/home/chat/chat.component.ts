import { Component, OnDestroy, OnInit } from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { filter } from "rxjs";
import { ChatMessage } from "app/modules/home/models/messages/chat.message";
import { ChatHubService } from "app/modules/home/services/chat-hub.service";
import { AuthorizationHelper } from "app/modules/common/helpers/authorization.helper";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@UntilDestroy()
@Component({
	selector: "app-chat",
	templateUrl: "./chat.component.html",
	styleUrls: ["./chat.component.scss"],
	standalone: true,
	imports: [
		FormsModule,
		CommonModule
	],
})
export class ChatComponent implements OnInit, OnDestroy {
	isConnected: boolean = false;
	userName: string = "";
	messages: ChatMessage[] = [];
	value: string = "";

	constructor(
		private readonly chatHubService: ChatHubService
	) {
	}

	async ngOnInit(): Promise<void> {
		const authorizationData = AuthorizationHelper.getAuthorizationData();
		this.userName = authorizationData.firstName;

		this.chatHubService.message
			.pipe(filter(x => !!x.id))
			.pipe(untilDestroyed(this))
			.subscribe((message: ChatMessage) => {
				this.messages.push(message);
			});

		this.isConnected = await this.chatHubService.start();
	}

	async ngOnDestroy(): Promise<void> {
		if(this.isConnected) {
			await this.chatHubService.stop();
		}
	}

	async sendMessage(): Promise<void> {
		if (!this.isConnected) {
			return;
		}

		const messageToSend = {
			id: Math.round(Math.random() * 10),
			userName: this.userName,
			message: this.value
		} as ChatMessage;

		await this.chatHubService.sendMessageToAll(messageToSend);
		this.value = "";
	}
}
