import { BaseMessage } from "app/modules/common/models/messages/base.message";

export interface AdventureMessage extends BaseMessage {
	user: string;
	message: string;
}
