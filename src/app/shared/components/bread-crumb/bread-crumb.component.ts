import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css'],
})
export class BreadCrumbComponent implements OnInit {
  @Input() folders: string[];
  @Output() onBackToPath = new EventEmitter<number>();

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

  /**
   * Metodo that process when user clic in a path in the bread-srumb
   * @param FullPah full path to navigate
   */
  procClickPath(FullPah: number)
  {
    this.onBackToPath.emit(FullPah);
  }

}
