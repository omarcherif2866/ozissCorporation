import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './esprit/components/notfound/notfound.component';
import { ProductService } from './esprit/service/product.service';
import { CountryService } from './esprit/service/country.service';
import { CustomerService } from './esprit/service/customer.service';
import { EventService } from './esprit/service/event.service';
import { IconService } from './esprit/service/icon.service';
import { NodeService } from './esprit/service/node.service';
import { PhotoService } from './esprit/service/photo.service';
import { AuthModule } from './esprit/components/auth/auth.module';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule, AuthModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
