import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbActiveModal, NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { AppCommonModule } from "app/modules/common/common.module";
import { AdventureService } from "app/modules/home/services/adventure.service";

@Component({
	selector: "app-adventure",
	templateUrl: "./adventure.component.html",
	styleUrls: ["./adventure.component.scss"],
	standalone: true,
	imports: [
		CommonModule,
		AppCommonModule,
		FormsModule,
		NgbDatepickerModule
	],
})
export class AdventureComponent implements OnInit {
	@Input()
	title: string;

	@Input()
	data: any;

	@Output()
	resultEmitter: EventEmitter<any> = new EventEmitter();

	constructor(
		private readonly modal: NgbActiveModal,
		private calendar: NgbCalendar,
		public formatter: NgbDateParserFormatter,
		private readonly adventureService: AdventureService
	) {
	}

	ngOnInit(): void {
		if (!!this.data.id) {
			const from = new Date(this.data.startsOn);
			this.data.startsOn = new NgbDate(from.getFullYear(), from.getMonth() + 1, from.getDate());
			const to = new Date(this.data.endsOn);
			this.data.endsOn = new NgbDate(to.getFullYear(), to.getMonth() + 1, to.getDate());

			return;
		}

		this.data.startsOn = this.calendar.getToday();
		this.data.endsOn = this.calendar.getNext(this.calendar.getToday(), 'd', 10);
	}

	onDateSelection(date: NgbDate): void {
		if (!this.data.startsOn && !this.data.endsOn) {
			this.data.startsOn = date;
		} else if (this.data.startsOn && !this.data.endsOn && date && date.after(this.data.startsOn)) {
			this.data.endsOn = date;
		} else {
			this.data.endsOn = null;
			this.data.startsOn = date;
		}
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.data.startsOn) ||
			(this.data.endsOn && date.equals(this.data.endsOn)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}

	isHovered(date: NgbDate) {
		return (
			this.data.startsOn &&
			!this.data.endsOn &&
			this.data.hoveredDate &&
			date.after(this.data.startsOn) &&
			date.before(this.data.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.data.endsOn && date.after(this.data.startsOn) && date.before(this.data.endsOn);
	}

	cancel(): void {
		const model = { result: false, model: this.data };

		this.resultEmitter.emit(model);
		this.modal.close(model);
	}

	save(): void {
		const model = { result: true, model: this.data };

		this.resultEmitter.emit(model);
		this.modal.close(model);
	}
}
