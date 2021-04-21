import { NgModule } from '@angular/core';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider'; 
const moduleList = [
  NzDropDownModule,
  NzDividerModule,
  NzButtonModule,
  NzInputModule,
  NzAutocompleteModule,
  NzGridModule,
  NzFormModule,
  NzSpinModule,
  NzBadgeModule,
  NzAvatarModule,
  NzIconModule,
  NzCardModule,
]
@NgModule({
  imports: [
   ...moduleList,
    NzIconModule.forRoot([]),
  ],
  exports:[
    ...moduleList,
  ],
  declarations: []
})
export class SharedModule { }
