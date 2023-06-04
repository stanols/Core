import { UserInfoModel } from "./user-info.model";

export interface UserModel extends UserInfoModel {
	password: string;
	confirmedPassword: string;
	token: string;
}
