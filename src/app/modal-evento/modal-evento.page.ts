import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-evento',
  templateUrl: './modal-evento.page.html',
  styleUrls: ['./modal-evento.page.scss'],
})
export class ModalEventoPage implements OnInit {

  constructor(
    private modalCtrl:ModalController
  ) { }

  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss();
  }

}
