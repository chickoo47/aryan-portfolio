// Three.js 3D Background
class Background3D {
    constructor() {
        this.canvas = document.getElementById('background-canvas');
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = null;
        this.geometricShapes = [];
        this.mouse = { x: 0, y: 0 };
        this.targetMouse = { x: 0, y: 0 };
        
        this.init();
        this.createParticles();
        this.createGeometricShapes();
        this.addEventListeners();
        this.animate();
    }
    
    init() {
        // Scene
        this.scene = new THREE.Scene();
        
        // Camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.z = 50;
        
        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
    
    createParticles() {
        const particlesCount = 800;
        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);
        
        const color1 = new THREE.Color(0x667eea);
        const color2 = new THREE.Color(0x764ba2);
        const color3 = new THREE.Color(0xf093fb);
        
        for (let i = 0; i < particlesCount * 3; i += 3) {
            // Position
            positions[i] = (Math.random() - 0.5) * 100;
            positions[i + 1] = (Math.random() - 0.5) * 100;
            positions[i + 2] = (Math.random() - 0.5) * 100;
            
            // Color
            const mixedColor = new THREE.Color();
            const random = Math.random();
            
            if (random < 0.33) {
                mixedColor.copy(color1);
            } else if (random < 0.66) {
                mixedColor.copy(color2);
            } else {
                mixedColor.copy(color3);
            }
            
            colors[i] = mixedColor.r;
            colors[i + 1] = mixedColor.g;
            colors[i + 2] = mixedColor.b;
        }
        
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
            size: 0.5,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });
        
        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }
    
    createGeometricShapes() {
        // Create floating geometric shapes
        const shapes = [
            { geometry: new THREE.TorusGeometry(3, 1, 16, 100), color: 0x667eea },
            { geometry: new THREE.OctahedronGeometry(2), color: 0x764ba2 },
            { geometry: new THREE.IcosahedronGeometry(2, 0), color: 0xf093fb },
            { geometry: new THREE.TetrahedronGeometry(2.5), color: 0x8b5cf6 }
        ];
        
        shapes.forEach((shapeData, index) => {
            const material = new THREE.MeshPhongMaterial({
                color: shapeData.color,
                transparent: true,
                opacity: 0.15,
                wireframe: true
            });
            
            const mesh = new THREE.Mesh(shapeData.geometry, material);
            
            // Random position
            mesh.position.x = (Math.random() - 0.5) * 60;
            mesh.position.y = (Math.random() - 0.5) * 60;
            mesh.position.z = (Math.random() - 0.5) * 30 - 10;
            
            // Random rotation
            mesh.rotation.x = Math.random() * Math.PI;
            mesh.rotation.y = Math.random() * Math.PI;
            
            // Store velocity for animation
            mesh.userData = {
                velocity: {
                    x: (Math.random() - 0.5) * 0.001,
                    y: (Math.random() - 0.5) * 0.001,
                    rotation: (Math.random() - 0.5) * 0.01
                }
            };
            
            this.geometricShapes.push(mesh);
            this.scene.add(mesh);
        });
        
        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);
        
        const pointLight1 = new THREE.PointLight(0x667eea, 1, 100);
        pointLight1.position.set(20, 20, 20);
        this.scene.add(pointLight1);
        
        const pointLight2 = new THREE.PointLight(0xf093fb, 1, 100);
        pointLight2.position.set(-20, -20, 20);
        this.scene.add(pointLight2);
    }
    
    addEventListeners() {
        window.addEventListener('resize', () => this.onResize());
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    }
    
    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    onMouseMove(event) {
        this.targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        // Smooth mouse movement
        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;
        
        // Rotate particles
        if (this.particles) {
            this.particles.rotation.y += 0.0005;
            this.particles.rotation.x = this.mouse.y * 0.1;
            this.particles.rotation.y += this.mouse.x * 0.05;
        }
        
        // Animate geometric shapes
        this.geometricShapes.forEach(shape => {
            shape.rotation.x += shape.userData.velocity.rotation;
            shape.rotation.y += shape.userData.velocity.rotation;
            shape.position.x += shape.userData.velocity.x;
            shape.position.y += shape.userData.velocity.y;
            
            // Bounce off boundaries
            if (Math.abs(shape.position.x) > 30) {
                shape.userData.velocity.x *= -1;
            }
            if (Math.abs(shape.position.y) > 30) {
                shape.userData.velocity.y *= -1;
            }
            
            // Mouse interaction
            const distance = Math.sqrt(
                Math.pow(shape.position.x - this.mouse.x * 20, 2) +
                Math.pow(shape.position.y - this.mouse.y * 20, 2)
            );
            
            if (distance < 15) {
                shape.material.opacity = 0.3;
                shape.scale.set(1.2, 1.2, 1.2);
            } else {
                shape.material.opacity = 0.15;
                shape.scale.set(1, 1, 1);
            }
        });
        
        // Camera movement based on mouse
        this.camera.position.x = this.mouse.x * 2;
        this.camera.position.y = this.mouse.y * 2;
        this.camera.lookAt(this.scene.position);
        
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new Background3D();
    });
} else {
    new Background3D();
}
