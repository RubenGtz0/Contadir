import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonAddComponent } from "./button-add/button-add.component";
import { ButtonDisComponent } from "./button-dis/button-dis.component";

@Component({
    selector: 'app-contador',
    standalone: true,
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ButtonAddComponent,
        ButtonDisComponent
    ]
})
export class CounterComponent {
    contador: number = 23;
    
    handleCount(value: number){
        this.contador=value++;
    }
}
