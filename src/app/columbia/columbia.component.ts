import { Component } from '@angular/core';
import { ColumbiaService } from '../services/columbia.service';

import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-columbia',
  templateUrl: './columbia.component.html',
  styleUrls: ['./columbia.component.scss']
})
export class ColumbiaComponent {

  public chart: Chart

  temperatures: any;
  
  constructor(private columbiaService: ColumbiaService) { }

  ngOnInit(): void {
    this.temperature()
  }

  temperature(){
    this.columbiaService.getTemperatures().subscribe(res => {
      console.log('resColumbia',res)
       let name = res['periods'].map(res => res.name)
       let temperature = res['periods'].map(res => res.temperature)
       
       const data = {
        labels: name,
        datasets: [{
          label: 'Columbia',
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
