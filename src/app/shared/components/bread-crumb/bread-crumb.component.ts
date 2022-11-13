import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css'],
})
export class BreadCrumbComponent implements OnInit {
  @Input() folders: string[];

  showBreadCrumb: boolean = true;

  constructor(private responsive: BreakpointObserver) {
    this.folders = [];
    this.folders = ['Project', 'English', 'Preacher'];
  }

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.XSmall).subscribe((result) => {
      if (result.matches) {
        this.showBreadCrumb = false;
      } else this.showBreadCrumb = true;
    });
  }
}
