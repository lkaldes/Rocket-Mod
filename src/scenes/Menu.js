class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    
    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/select.wav');
        this.load.audio('sfx_explosion', './assets/explosion.wav');
        this.load.audio('sfx_rocket', './assets/rocket.wav');
        this.load.image('menu', './assets/menu.png');
        this.load.image('menu2', './assets/menu2.png');
    }

    create() {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.count = 1;
        // show menu
        this.menu = this.add.tileSprite(0, 0, 640, 480, 'menu').setOrigin(0, 0);
        // define keys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
      if (Phaser.Input.Keyboard.JustDown(keyW) && this.count != 2) {
        this.count = 2;
        this.menu = this.add.tileSprite(0, 0, 640, 480, 'menu2').setOrigin(0, 0);
        this.sound.play('sfx_select');
      }
      if (Phaser.Input.Keyboard.JustDown(keyA)) {
        // easy mode
        game.settings = {
          players: this.count,
          spaceshipSpeed: 3,
          gameTimer: 60000,
          halftimer: 30000
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');    
      }
      if (Phaser.Input.Keyboard.JustDown(keyD)) {
        // hard mode
        game.settings = {
          players: this.count,
          spaceshipSpeed: 4,
          gameTimer: 45000,
          halftimer: 22500
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');    
      }
    }
}
