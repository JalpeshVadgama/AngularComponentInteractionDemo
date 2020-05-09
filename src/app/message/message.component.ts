import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"],
})
export class MessageComponent implements OnInit {
  constructor() {}
  @Output() public childEvent = new EventEmitter();
  @Input() public messageFromParent: string;

  ngOnInit(): void {}

  public onClick(): void {
    this.childEvent.emit("Hey parent component I'm good! How are you?");
  }
}
