import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddReportPage } from '../modals/add-report/add-report.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  constructor(
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async openAddReportPage() {
    const modal = await this.modalController.create({
      component: AddReportPage
    });
    return await modal.present();
  }

  openReport() {
    console.log('openReport');
    this.router.navigate(['app/tabs/report/item']);
  }

}
