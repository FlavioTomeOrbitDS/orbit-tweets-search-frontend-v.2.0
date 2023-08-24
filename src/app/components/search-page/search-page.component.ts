import { SearchService } from './../../services/search.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  constructor(
    private httpclient: HttpClient,
    private searchService: SearchService
  ) {}

  //List of languages to show is Languages Drop List
  languages: { [key: string]: string } = {
    pt: 'Portugues',
    en: 'English',
    'en-gb': 'English UK',
    es: 'Spanish',
    fr: 'French',
    ar: 'Arabic',
    ja: 'Japanese',
    de: 'German',
    it: 'Italian',
    id: 'Indonesian',
    ko: 'Korean',
    tr: 'Turkish',
    ru: 'Russian',
    nl: 'Dutch',
    fil: 'Filipino',
    msa: 'Malay',
    'zh-tw': 'Traditional Chinese',
    'zh-cn': 'Simplified Chinese',
    hi: 'Hindi',
    no: 'Norwegian',
    sv: 'Swedish',
    fi: 'Finnish',
    da: 'Danish',
    pl: 'Polish',
    hu: 'Hungarian',
    fa: 'Farsi',
    he: 'Hebrew',
    ur: 'Urdu',
    th: 'Thai',
  };

  languageKeys: string[] = Object.keys(this.languages);

  queryContent: string = '';

  langContent: string = 'pt';

  includeRetweets: boolean = false;

  includeReplies: boolean = false;

  fromDate: string = '';

  toDate: string = '';

  twitterAccount = 0;

  ngOnInit(): void {}

  //Radio Buttons Variables
  public toogleIncludeRetweets() {
    this.includeRetweets = !this.includeRetweets;
  }

  public toogleIncludeReplies() {
    this.includeReplies = !this.includeReplies;
  }

  public switchAccount(account: number){
    this.twitterAccount = account;
    console.log(this.twitterAccount)
  }

  //Add the specified filter in the query
  private buildQuery() {
    let str = this.queryContent;

    !this.includeReplies ? (str = str + ' -is:reply') : false;

    !this.includeRetweets ? (str = str + ' -is:retweet') : false;

    return str;
  }

  //Return the "today" and "yesterday" dates
  private getDates() {
    const currentDate = new Date();
    const yesterdayDate = new Date(currentDate);
    yesterdayDate.setDate(currentDate.getDate() - 1);

    const formatDate = (date: Date) => {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };

    const formattedNow = formatDate(currentDate);
    const formattedYesterday = formatDate(yesterdayDate);

    return {
      now: formattedNow,
      yesterday: formattedYesterday,
    };
  }

  //Send the data do Backend
  sendData(endpoint: String) {
    if (this.queryContent == '') {
      console.log('Query não pode ser vazia!!');
      return false;
    }

    // get the "toDate" and "fromDate"
    const dates = this.getDates();

    //builds the search query
    let q = this.buildQuery();

    //builds the json data to send to backend
    const dataToSend = {
      twitterAccount: this.twitterAccount,
      query: q,
      lang: this.langContent,
      toDate: dates.now,
      fromDate: dates.yesterday,
    };

    //call the service to send the request
    this.searchService.sendRequest(dataToSend, endpoint).subscribe({
      next: (response: any) => {
        this.downloadExcel(response);
        console.log(response);
        return true;
      },
      error: (error) => {
        console.error(error);
        return false;
      },
    });
    return false;
  }

  downloadExcel(data: any) {
    const blob = new Blob([data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'data.xlsx';
    link.click();
  }
}
