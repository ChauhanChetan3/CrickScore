import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from '../../services/api-call.service';
import { error } from 'console';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [CommonModule,MatchCardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css',
})

export class LiveComponent implements OnInit {

  liveMatches:any
  loading = false
  constructor(private _api: ApiCallService) {}
  ngOnInit(): void {
    this.loadLiveMaches();
  }

  private loadLiveMaches() {
    this.loading = true

    this._api.getLiveMatches().subscribe({
      next: data => {
        console.log(data);
        this.liveMatches=data;
        this.loading = false
      }, error: error => {
        console.log(error);
      }
    });
  }

  refreshScore() {  
    this.loadLiveMaches()
  }
}


// @Component({
//   selector: 'app-live-score',
//   standalone: true,
//   imports: [CommonModule, LiveMatchCardComponent,NgxTypedJsModule],
//   templateUrl: './live-score.component.html',
//   styleUrl: './live-score.component.css'
// })
// export class LiveScoreComponent implements OnInit {

//   constructor(private _api: ApiService) {

//   }
 
//   liveData: any;
//   loading = false
  
//   ngOnInit(): void {
//     this.loadScore()
//   }

//   loadScore() {
//     this.loading = true
    
//     this._api.getLiveScore().subscribe({
//       next: data => {
//         this.liveData = data;
        
//         // console.log("hello")
//         console.log(this.liveData);    
//         this.loading = false
//       },
//       error: (error) => {
//         console.log(error)
//         this.loading = false
//       }
//     })

//   }

//   refreshScore() {

    
//     this.loadScore()
//   }


// }