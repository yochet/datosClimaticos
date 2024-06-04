import { Component, OnInit } from '@angular/core';
import { KansasService } from '../services/kansas.service';

import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-kansas',
  templateUrl: './kansas.component.html',
  styleUrls: ['./kansas.component.scss']
})
export class KansasComponent implements OnInit{
  
  
  public chart: Chart
  temperatures: any[]=[];
  
  constructor(private kansasService: KansasService,
    
  ) { }

  
  
  
  ngOnInit(): void {
    this.temperature()
    
  }

  temperature(){
    this.kansasService.getTemperatures().subscribe(res => {
      console.log('res',res)
       let name = res['periods'].map(res => res.name)
       let temperature = res['periods'].map(res => res.temperature)
       
       const data = {
        labels: name,
        datasets: [{
          label: 'Kansas',
          data: temperature,
          fill: false,
          borderColor: '#3cba9f',
          tension: 0.1
          
        }]
      };
  
      // Creamos la gráfica
      this.chart = new Chart("chart", {
        type: 'line' as ChartType, // tipo de la gráfica 
        data, // datos 
        options: {
          
          
        }
      })
          });
    
          
  }

  
}


