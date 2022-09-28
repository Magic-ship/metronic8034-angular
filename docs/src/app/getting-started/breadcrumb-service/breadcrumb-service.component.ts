import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-breadcrumb-service',
  templateUrl: './breadcrumb-service.component.html',
  styleUrls: ['./breadcrumb-service.component.scss'],
})
export class BreadcrumbServiceComponent implements OnInit {
  code1 = `
  links: Array<PageLink> = [{
    title: 'Main title',
    path: '/',
    isActive: false,
  }, {
    title: 'Second title',
    path: '/',
    isActive: false,
  }];

  constructor(private pageInfo: PageInfoService) {
    pageInfo.updateTitle('Page title');
    pageInfo.updateBreadcrumbs(this.links);
  }
`;

  constructor() {}

  ngOnInit(): void {}
}
