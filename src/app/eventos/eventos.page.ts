import { ModalEventoPage } from './../modal-evento/modal-evento.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  constructor(
    private modalCtrl:ModalController
  ) { }

  async showModal(){
    const modal = await this.modalCtrl.create({
      component: ModalEventoPage
    });
    modal.present();
  }
  ngOnInit() {
  }

}
