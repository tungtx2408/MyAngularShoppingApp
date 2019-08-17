import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  lat: number = 21.040439;
  lng: number = 105.765541;

  constructor() {}

  ngOnInit() {}
}
