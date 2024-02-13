import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-insert-package',
  templateUrl: './insert-package.component.html',
  styleUrl: './insert-package.component.scss'
})
export class InsertPackageComponent implements OnInit {
  parcelForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.parcelForm = this.fb.group({
      sku: ['', Validators.required],
      description: [''],
      streetAddress: ['', Validators.required],
      town: ['', Validators.required],
      country: ['', Validators.required],
      deliveryDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.parcelForm.valid) {
      console.log(this.parcelForm.value);
      // Submit form innit
    }
  }
}
