import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-component',
  templateUrl: './tree-component.component.html',
  styleUrls: ['./tree-component.component.css']
})
export class TreeComponentComponent implements OnInit {
  public inventoty: any = [
    {
      "node": "Calsoft",
      "id": "datacenter-1",
      "lable": "Calsoft",
      "items": [
        {
          "node": "cluster",
          "id": "cluster-2",
          "lable": "cluster-01",
          "selected": 0,
          "items": [
            {
              "node": "host",
              "id": "host-2",
              "lable": "Host-1",
              "selected": 0
            },
            {
              "node": "host",
              "id": "host-2",
              "lable": "Host-1",
              "selected": 0
            }
          ]
        }]
    },{
	"node": "DC-1",
      "id": "datacenter-2",
      "lable": "Datacenter-1",
      "items": [
        {
          "node": "cluster",
          "id": "cluster-3",
          "lable": "New Cluster",
          "selected": 0,
          "items": [
            {
              "node": "host",
              "id": "host-2",
              "lable": "172.21.157.120",
              "selected": 0
            },
            {
              "node": "host",
              "id": "host-2",
              "lable": "172.21.157.120",
              "selected": 0
            }
            
          ]
        }]
    },
  
  ];

  public treeData: any = [];
 
  onChange(event) {
    this.treeData = [];
    console.log(event.target.value);
    this.inventoty.forEach(element => {
      if (element.id == event.target.value) {
        const data = JSON.stringify(element.items);
        this.treeData = JSON.parse(data);
      }
    });
}




  constructor() { }

  ngOnInit() {
  }

}
