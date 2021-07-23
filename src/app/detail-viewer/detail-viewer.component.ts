import {AfterContentInit, Component, ContentChild, ContentChildren, Input, OnInit, QueryList, TemplateRef} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {ERROR} from '@angular/compiler-cli/src/ngtsc/logging/src/console_logger';
import {PrimeTemplate} from 'primeng/api';

@Component({
  selector: 'app-detail-viewer',
  templateUrl: './detail-viewer.component.html',
  styleUrls: ['./detail-viewer.component.css']
})
export class DetailViewerComponent implements OnInit, AfterContentInit {
  @Input()
  public form: FormGroup;
  public headTemplateRef: TemplateRef<any>;
  public bodyTemplateRef: TemplateRef<any>;
  public footerTemplateRef: TemplateRef<any>;
@ContentChildren(PrimeTemplate) templates: QueryList<PrimeTemplate>;
  @Input()
  public mode = 'detail';

  constructor() { }

  ngOnInit(): void {
    if (this.form === undefined){
  console.error('nem kapott paramétert a működéshez');
    }
  }

  ngAfterContentInit(): void {
    this.templates.forEach((item) => {
      switch (item.getType()){
        case 'header':
          this.headTemplateRef = item.template;
          break;
        case 'body':
          this.bodyTemplateRef = item.template;
          break;
        case 'footer':
          this.footerTemplateRef = item.template;
          break;
        default:
      }
    });
  }

  formControls(): AbstractControl[] {
    return Object.values(this.form.controls);
  }
}
