import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit{
  @Input() data: any[] = [];
  @Input() columns: { key: string; title: string; }[] = [];

  paginatedData: any[] = [];
  itemsPerPage = 10;
  currentPage = 1;
  totalPages = 1;

  ngOnInit() {
    this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
    this.updatePaginatedData();
  }

  updatePaginatedData() {
    // i didn't do the pagination query logic because i have no time
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.data.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedData();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedData();
    }
  }
}
