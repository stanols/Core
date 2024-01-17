import { Injectable } from '@angular/core';
import { BaseHubService } from 'app/modules/common/services/base-hub.service';
import { ChatMessage } from '../models/messages/chat.message';

@Injectable()
export class ChatHubService extends BaseHubService<ChatMessage> {
	constructor() {
		super("ChatHub");
	}

	public async sendMessageToAll(message: ChatMessage): Promise<ChatMessage> {
		return await this.connection.invoke<ChatMessage>(
			"SendMessageToAll",
			message
		);
	}

	protected setClientMethods(): void {
		this.connection.on("ReceiveMessage", (message: ChatMessage) => {
			this.message.next(message);
		});
	}
}
