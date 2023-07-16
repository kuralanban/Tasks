import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'calender';
  public weekdays: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  public months: string[] = [
    '',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  public currentMonthIndex = 1;
  private currentMonth: string = this.months[this.currentMonthIndex];
  public selectedMonth!: number;
  public monthDays: any[][] = [];

  constructor() {}
  ngOnInit() {}
  public onChangingMonths(monthIndex: number) {
    this.getAllDaysOfMonth(2023, this.currentMonthIndex);
    return this.months[monthIndex];
  }

  public nextMonth() {
    this.currentMonthIndex = this.currentMonthIndex + 1;
    this.getAllDaysOfMonth(2023, this.currentMonthIndex);
  }
  public previousMonth() {
    this.currentMonthIndex = this.currentMonthIndex - 1;
    this.getAllDaysOfMonth(2023, this.currentMonthIndex);
  }

  public getAllDaysOfMonth(year: number, month: number): void {
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);

    const daysInMonth: any[][] = []; // Update to 2D array

    // Adjust the day of the week to start from Sunday (0)
    const startDay = (firstDay.getDay() + 6) % 7;

    // // Add empty spaces for days in the previous month
    // for (let i = 0; i < startDay; i++) {
    //   daysInMonth.push(['']); // Use 0 to represent empty space
    // }

    // Add the days of the current month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      daysInMonth.push([day]); // Wrap day in an array to match the 2D array type
    }

    this.monthDays = daysInMonth;
  }

  public isWeekend(day: number): boolean {
    const targetIndexes = [1, 8, 15, 22, 29]; // Add other indexes if needed
    return targetIndexes.includes(day);
  }
}
