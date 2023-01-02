import { Component, Input, Output, EventEmitter } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: "app-popup",
	templateUrl: "./popup.component.html",
	styleUrls: ["./popup.component.scss"]
})
export class PopupComponent {
	@Input() title: string;
	@Input() text: string[];
	@Input() cancelButton: string;
	@Input() okButton: string;
	@Output() resultEmitter: EventEmitter<boolean>;

	constructor(
		public activeModal: NgbActiveModal
	) {
		this.cancelButton = "Cancel";
		this.okButton = "Ok";
		this.resultEmitter = new EventEmitter();
	}

	onCancel(): void {
		this.resultEmitter.emit(false);
		this.activeModal.close(false);
	}

	onOk(): void {
		this.resultEmitter.emit(true);
		this.activeModal.close(true);
	}
}