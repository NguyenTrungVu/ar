import React from "react";
// import { ZapparCamera, ImageTracker, ZapparCanvas } from '@zappar/zappar-react-three-fiber';

const targetFile = new URL("./assets/github.png", import.meta.url).href;

function ImageDetec() {
  return (
    <div>
      <div >
        <div>Loading, please wait...</div>
      </div>
      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true; precision: medium;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
      >
        <a-nft
          type="nft"
          url="https://github.com/AR-js-org/AR.js/blob/master/aframe/examples/image-tracking/nft/trex/trex-image/trex"
          smooth="true"
          smoothCount="10"
          smoothTolerance="0.01"
          smoothThreshold="5"
        >
          <a-entity
            gltf-model="https://github.com/AR-js-org/AR.js/blob/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
            scale="5 5 5"
            position="150 300 -100"
          ></a-entity>
        </a-nft>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

export default ImageDetec;
