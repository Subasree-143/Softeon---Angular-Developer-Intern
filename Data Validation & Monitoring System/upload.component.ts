// components/upload/upload.component.ts
import { Component } from '@angular/core';
import { ValidationService } from '../../services/validation.service';
import { MonitoringService } from '../../services/monitoring.service';

@Component({
  selector: 'app-upload',
  template: `
    <h2>Upload JSON File</h2>
    <input type="file" (change)="onFileChange($event)" />
  `
})
export class UploadComponent {

  constructor(
    private validationService: ValidationService,
    private monitoringService: MonitoringService
  ) {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const data = JSON.parse(reader.result as string);

      const errors = this.validationService.validateBatch(data);

      this.monitoringService.logBatch(data.length, errors.length);

      console.log('Validation Errors:', errors);
    };

    reader.readAsText(file);
  }
}