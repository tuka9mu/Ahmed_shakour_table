import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import "datatables.net";
@Component({
      selector: 'app-table',
      templateUrl: './table.component.html',
      styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

      constructor() { }


      ngOnInit() {
            let table = $('#example').DataTable({

                  drawCallback: () => {
                        $('.paginate_button.next').on('click', () => {
                              this.nextButtonClickEvent();
                        });
                  },
                  "language": {
                        "loadingRecords": "جارٍ التحميل...",
                        "lengthMenu": "أظهر _MENU_ مدخلات",
                        "zeroRecords": "لم يعثر على أية سجلات",
                        "info": "إظهار _START_ إلى _END_ من أصل _TOTAL_ مدخل",
                        "search": "ابحث:",
                        "paginate": {
                              "first": "الأول",
                              "previous": "السابق",
                              "next": "التالي",
                              "last": "الأخير"
                        }
                  },
            });
      }

      buttonInRowClick(event: any): void {
            event.stopPropagation();
            console.log('Button in the row clicked.');
      }

      wholeRowClick(): void {
            console.log('Whole row clicked.');
      }

      nextButtonClickEvent(): void {
            //do next particular records like  101 - 200 rows.
            //we are calling to api

            console.log('next clicked')
      }
      previousButtonClickEvent(): void {
            //do previous particular the records like  0 - 100 rows.
            //we are calling to API
      }
}
