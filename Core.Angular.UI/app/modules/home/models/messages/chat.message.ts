import { BaseMessage } from "app/modules/common/models/messages/base.message";

export interface ChatMessage extends BaseMessage {
	userName: string;
	message: string;
}
