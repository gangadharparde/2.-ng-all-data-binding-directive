import { Customer } from './Customer';
import { Component, Input } from '@angular/core';

// 1. interpolation-one-way-data-binding
@Component({
    selector: 'gd-interpolation-one-way-data-binding',
    template: `
    <b>One-way data binding achieved through:</b><br/><hr/>
    <b>Interpolation or String Interpolation: </b>
         <mark>{{message}}!</mark>
    <br/>
    <br/> 
        <img src="{{imageUrl}}"/> 
    <br/>
    `
})
export class InterpolationOneWayBindingComponent {
    message = "This is sample message";
    imageUrl = "https://picsum.photos/150/150";
}

// 2. property-one-way-data-binding
@Component({
    selector: 'gd-property-binding',
    template: `
    <br/>
    <b>Property Binding:</b>
    <br/> 
        <img [src]="imageUrl"/> 
    <br/>
        <button type="button" [disabled]="isOn">Enabled Button</button>
    <br/>
        <button type="button" [disabled]="!isOn">Disabled Button</button>
    <br/>
    `
})
export class PropertyBindingComponent {
    isOn = false;
    imageUrl = "https://picsum.photos/150/150";
}

// 3. attribute-one-way-data-binding
@Component({
    selector: 'gd-attribute-binding',
    template: `
    <br/>
    <b>Attribute Binding:</b>
    <div>
        <table border=1>
            <tr><td [attr.colspan]="colSpanVal">Three</td></tr>
            <tr><td>1</td><td>2</td><td>3</td></tr>
        </table>
    </div>
   `
})
export class AttributeBindingComponent {
    colSpanVal = 3;
}

// 4. class-one-way-data-binding
@Component({
    selector: 'gd-class-binding',
    template: `
    <br/>
    <b>Class Binding:</b>
             <div>
             <i><span [class.myClass]="isTrue">This class binding is for true value</span><br/>
             <span [class.myClass]="!isTrue">This class binding is for false value</span>
             </i>
             </div>
             `
})
export class ClassBindingComponent {
    isTrue: boolean = true;
}

// 5. class-one-way-data-binding
@Component({
    selector: 'gd-style-binding',
    template: `
    <br/>
    <b>Style Binding:</b>
        <div>
                <span [style.color]="'blue'">This is a Blue Heading </span><br/>
                <span [style.font-size.px]="isTrue ? '10' : '20'">
                    This style binding is set for true value 
                </span><br/>
                <span [style.font-size.%]="!isTrue ? '120' : '220'">T</span>his style binding is set for false value 
                <br/>
        </div>
    `
})
export class StyleBindingComponent {
    isTrue: boolean = true;
}



// 6. event-one-way-data-binding
@Component({
    selector: 'gd-event-one-way-binding',
    template: `
    <br/>
    <b>One Way Event Binding:</b>
    <br/> 
       <button (click)="onSave()" > Click </button>
    <br/>
    <br/>
    `
})
export class OneWayEventBindingComponent {
    onSave() {
        alert("One Way Event Binding Component Button Clicked");
    }
}

// 7. two-way-data-binding-ngModel
@Component({
    selector: 'gd-twoway-event-binding-easy',
    template: `
    <br/>
    <b>Two Way Data Binding using [(ngModel)]:</b>
    <br/><input [(ngModel)]="something" #ctrl="ngModel" required >
    <br/> Value: <mark>{{ something | titlecase }}</mark>
    <br/> Valid: <mark>{{ ctrl.valid }}</mark>
    <br/><button (click)="setValue()">Set value</button><br/>
    `,
})
export class RecommendedTwoWayEventBindingComponent {
    something: string = '';
    setValue() {
        this.something = 'KGF Gold Mine';
    }
}


// 8. uneasy-event-two-way-data-binding
@Component({
    selector: 'gd-twoway-event-binding-uneasyway',
    template: `
    <br/>
    <b>Two Way Alternative Event Binding Using $event:</b>
    <br/> 
    <label>Enter Some Message here: </label>
    <input (keyup)="change($any($event))" type="text"/>
    <br/>In Upper Case: <mark>{{data | uppercase}}</mark>
    <br/>
    `
})
export class UnEasyTwoWayEventBindingComponent {
    data: string = "";
    change($event: any) {
        console.log($event);    
        console.log($event.target.value);
        this.data = $event.target.value;
    }
}


// 8. uneasy-event-two-way-data-binding
@Component({
    selector: 'gd-three-ng-structral-directives',
    template: `
    <br/>
    <b>Angular Three Structural Directives :</b>
    <br/> 
    <b><i>*ngIf</i></b><br/> 
        <span *ngIf="true">
            Expression is true, this paragraph is in DOM.
        </span><br/> 
        <span *ngIf="false">
            Expression is false, this paragraph is not in DOM.
        </span>
        
        <span *ngIf="5>10; else elseBlock">  
            5 is greater than 10....
        </span><br/> 
        <ng-template #elseBlock>  
            10 is greater than 5... 
        </ng-template> <br/> 
    
    <b><i>*ngFor</i></b><br/> 
        <table border=1>
             <tr>
                <th>Customer_ID</th>
                <th>Customer_Name</th>
                <th>*nFor -> Index</th>
                <th>IsFirst</th>
                <th>IsLast</th>
                <th>IsEven</th>
                <th>IsOdd</th>
            </tr>
            <tr *ngFor="let customer of customers;
                    let i=index
                    let isFirst = first; 
                    let isLast = last;
                    let isEven = even; 
                    let isOdd = odd">
                 <td>{{customer.id}}</td>
                 <td>{{customer.name}}</td> 
                 <td>{{i}}</td> 
                 <td>{{isFirst}}</td>  
                 <td>{{isLast}}</td>  
                 <td>{{isEven}}</td>
                 <td>{{isOdd}}</td>
            </tr>
        </table>
        <br/>
    <b><i>*ngSwitch</i></b><br/> 
        Enter the number<br/> 
        <input type='text' [(ngModel)]="num" />
        <br/> 
        <div [ngSwitch]="num"><mark>Day's Greeting:</mark> &nbsp;
            <span *ngSwitchCase="'1'">Today is Sunday! You deserve a break</span>
            <span *ngSwitchCase="'2'">Today is Monday, Hope you have productive Week</span>
            <span *ngSwitchCase="'3'">Today is Tuesday, Smash your Goals</span>
            <span *ngSwitchCase="'4'">Today is Wednesday, You're already half way through</span>
            <span *ngSwitchCase="'5'">Today is Thursday, It's like Friday Lite</span>
            <span *ngSwitchCase="'6'">Today is Friday, TGIF!!!</span>
            <span *ngSwitchCase="'7'">Today is Saturday, Let's Party!! :) </span>
            <span *ngSwitchDefault> Enter Day Of Week  1....7 </span>
        </div>
    <br/>
    <br/>
    <b>Angular Two Attribute Directives :</b>
    <br/> 
    <b><i>[ngStyle]</i></b><br/> 
        <button style='color:blue' [ngStyle]="myStyle()">Angular Workspaces Are Big In Size</button><br/> 
    <b><i>[ngClass]</i></b><br/> 
        <button class='colorClass' [ngClass]='applyClasses()'>Angular Needs Practise</button>
   `
   , 
   styles: [`
      .boldClass{ 
            font-weight:bold; 
            font-size:12px; 
        } 
      .italicsClass{ 
            font-style:italic; 
        } 
      .colorClass{ 
            color:Red; 
       }
    `] 
})
export class NgThreeStructuralDirectivesComponent {
    //this is for *ngFor
    customers=Customer.customers;
    
    //this is for *ngSwitch
    num:number=0;

    //this is for [ngStyle]
    isBold: boolean = true; 
    fontSize: number = 12; 
    isItalic: boolean = true; 
 
    myStyle() { 
        let mystyles = { 
            'font-weight': this.isBold ? 'bold' : 'normal', 
            'font-style': this.isItalic ? 'italic' : 'normal', 
            'font-size.px': this.fontSize 
            }; 
        return mystyles; 
    } 

    //this is for [ngClass]

    applyBoldClass: boolean = true; 
    applyItalicsClass: boolean = true; 

    applyClasses() { 
        let classes = { 
                boldClass: this.applyBoldClass, 
                italicsClass: this.applyItalicsClass 
        }; 
        return classes; 
    } 
}

export const AllCompComponent =
    [InterpolationOneWayBindingComponent,
        PropertyBindingComponent,
        AttributeBindingComponent,
        ClassBindingComponent,
        StyleBindingComponent,
        OneWayEventBindingComponent,
        UnEasyTwoWayEventBindingComponent,
        RecommendedTwoWayEventBindingComponent,
        NgThreeStructuralDirectivesComponent
    ];
