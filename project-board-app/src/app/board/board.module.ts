import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BoardPageComponent } from './pages/board-page/board-page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-item/card-item.component';

import { FilterPipe } from './pipes/filter.pipe';
import { ColorStateDirective } from './directives/color-state.directive';
import { BoardService } from './services/board.service';

import { FormsModule } from '@angular/forms';

import { 
  MatButtonModule, 
  MatInputModule, 
  MatFormFieldModule, 
  MatIconModule, 
  MatToolbarModule, 
  MatListModule,
  MatCardModule
} from '@angular/material';


@NgModule({
  declarations: [
    ToolbarComponent,
    BoardPageComponent,
    CardListComponent,
    CardItemComponent,
    FilterPipe,
    ColorStateDirective
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    FormsModule,
    MatButtonModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatIconModule, 
    MatToolbarModule, 
    MatListModule,
    MatCardModule
  ],
  exports: [
    ToolbarComponent,
    BoardPageComponent,
    CardListComponent,
    CardItemComponent,
    FilterPipe,
    ColorStateDirective
  ],
  providers: [
    BoardService
  ]
})
export class BoardModule { }
