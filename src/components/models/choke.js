import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
var VRMLLoader =  require('./VRMLLoader');

class KicadChokeComponent extends React.Component {

    constructor(props) {

        super(props);

        this.displayName = 'Choke';

        let loader = new VRMLLoader();

        loader.load('/models/kicad/choke.wrl', (scene) => {

            console.log('Loaded Choke', scene);

            // this.geometry = geometry;
            // this.material = new THREE.MeshFaceMaterial( materials );

        });

    }

    render() {

        return React.createElement( ReactTHREE.Mesh, {
            geometry: this.geometry,
            material: this.material,
            position: this.props.position,
            quaternion: this.props.quaternion,
            visible: this.props.visible,
            scale: this.props.scale
        });

    }

}

KicadChokeComponent.propTypes = {
    scale: React.PropTypes.number,
    position: React.PropTypes.instanceOf(THREE.Vector3),
    quaternion: React.PropTypes.instanceOf(THREE.Quaternion),
    visible: React.PropTypes.bool
};

export default KicadChokeComponent;
