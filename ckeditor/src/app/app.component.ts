import { Component, OnInit } from '@angular/core';
import * as InlineEditor from '@ckeditor/ckeditor5-build-inline/build/ckeditor';
import * as CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import * as uniqid from 'uniqid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public instanceCount = 1;
  public ckeditorIds: string[] = [];

  ngOnInit(): void {
    this.ckeditorIds.push(uniqid());
    console.log(InlineEditor.build.plugins.map( plugin => plugin.pluginName ));
  }
  createInstances(): void {
    for (let i = 0; i < this.instanceCount; i++) {
      InlineEditor
        .create( document.querySelector( `#my-ckeditor-instance-${this.ckeditorIds[i]}` ), {
          toolbar: ['undo', 'redo', 'bold', 'italic', 'blockQuote', 'imageTextAlternative',
          'imageUpload', 'heading', 'imageStyle:full', 'imageStyle:side', 'link', 'numberedList', 'bulletedList']
          , plugins: ['Essentials', 'CKFinderUploadAdapter', 'Autoformat', 'Bold', 'Italic',
          'BlockQuote', 'EasyImage', 'Heading', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar',
          'ImageUpload', 'Link', 'List', 'Paragraph', 'ImageUpload'],
          ckfinder: {
            uploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json'
          }
        })
        .then( editor => {
          console.log(editor);
          // TODO: Do something with the editor
        } )
        .catch( error => {
          console.error( error );
        } );
    }
  }
  createIds(): string[] {
    this.ckeditorIds = [];
    for (let i = 0; i < this.instanceCount; i++) {
      this.ckeditorIds.push(uniqid());
    }
    return this.ckeditorIds;
  }
}
