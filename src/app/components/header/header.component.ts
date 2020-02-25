import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';
import { RequestDataService } from '../../services/request-data/request-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private ss: SearchService, 
    private rds: RequestDataService,
    private router: Router
    ) { }

  ngOnInit() {}

  search(keyWord){
    this.ss.search(keyWord).subscribe( (res) => {
      this.getSearchResults(res)
      this.router.navigateByUrl('/search-res')
    })
  }

  getSearchResults(res){
    this.rds.setRequestData(res)
  }

}
