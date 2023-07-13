import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NgbActiveModal, NgbCalendar, NgbDate, NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import { AdventureService } from "app/modules/home/services/adventure.service";

@Component({
	selector: "app-adventure",
	templateUrl: "./adventure.component.html",
	styleUrls: ["./adventure.component.scss"]
})
export class AdventureComponent implements OnInit {
	@Input()
	title: string;

	@Output()
	resultEmitter: EventEmitter<boolean> = new EventEmitter();

	hoveredDate: NgbDate | null = null;
	fromDate: NgbDate | null = null;
	toDate: NgbDate | null = null;

	constructor(
		private readonly modal: NgbActiveModal,
		private calendar: NgbCalendar,
		public formatter: NgbDateParserFormatter,
		private readonly adventureService: AdventureService
	) {
	}

	ngOnInit(): void {
		this.fromDate = this.calendar.getToday();
		this.toDate = this.calendar.getNext(this.calendar.getToday(), 'd', 10);
	}

	onDateSelection(date: NgbDate): void {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}

	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	cancel(): void {
		this.resultEmitter.emit(false);
		this.modal.close(true);
	}

	save(): void {
		this.resultEmitter.emit(true);
		this.modal.close(true);
	}
}
