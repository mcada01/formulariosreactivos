import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public formGroup: FormGroup;
  public formData;

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit() {
    this.buildForm();
  }
  
  private buildForm(){
      this.formGroup = this.formBuilder.group({
                name: 'Melissa',
                email: 'meli@email.com',
                country: 'Colombia',
                comments: 'ejemplooooo'
         });
  }

  public sendData(){
    this.formData = this.formGroup.value;
    console.log(this.formData);
  }

}