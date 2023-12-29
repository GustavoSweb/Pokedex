<template>
  <div class="w-[500px] h-[350px]">
    <img src="../assets/img/PokedexProcess.svg" class="max-w-[500px]" alt="" />
    <img
      :src="DataPokemonProcess.sprite"
      alt=""
      id="Sprite"
      :class="[
        'transition-all',
        'w-[120px]',
        'h-[120px]',
        isOnSprite[isOnSpriteValue],
      ]"
    />

    <svg
      width="90"
      height="90"
      viewBox="0 0 321 323"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="Brilliance"
      :class="[
        {
          'animate-pulse': isOnPokedex,
          'opacity-0 animate-none': !isOnPokedex,
        },
      ]"
    >
      <g filter="url(#filter0_f_110_58)">
        <ellipse cx="160.5" cy="161.5" rx="100.5" ry="101.5" fill="#99F4FF" />
      </g>
      <defs>
        <filter
          id="filter0_f_110_58"
          x="0"
          y="0"
          width="321"
          height="323"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="30"
            result="effect1_foregroundBlur_110_58"
          />
        </filter>
      </defs>
    </svg>

    <svg
      width="198"
      height="196"
      viewBox="0 0 198 196"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="max-w-[60px]"
      id="Button"
    >
      <g class="transition-all" @click="BottomBut($event)">
        <g filter="url(#filter0_d_103_92)">
          <path
            d="M90.5 108L79.5 116.5L77.5 178C78.749 181.981 79.5857 184.094 84 185H124.588L130 180.5V116.5L113.5 108H90.5Z"
            fill="#313131"
            @mouseenter="FillPath($event)"
            @mouseleave="FillPath($event, '#313131')"
            class="transition-all"
          />
        </g>
        <path
          d="M118.5 195C124.79 189.855 127.455 186.723 130 180.5L124.776 184.774C124.598 184.92 124.374 185 124.143 185H83.5C79.9926 183.837 78.5462 182.235 77 177.5L79 117L63.5 137V191.5C64.1323 193.449 64.7076 194.428 68 195H118.5Z"
          fill="#0E0E0E"
        />

        <path
          d="M130 118V180.5M130 180.5C127.455 186.723 124.79 189.855 118.5 195H68C64.7076 194.428 64.1323 193.449 63.5 191.5V137L79 117L77 177.5C78.5462 182.235 79.9926 183.837 83.5 185H124.143C124.374 185 124.598 184.92 124.776 184.774L130 180.5Z"
          stroke="black"
        />
      </g>

      <g class="transition-all" @click="LeftBut($event)">
        <path
          d="M90.5 108L80 116.5L15 120.5C10.4984 117.256 9.40388 115.654 9.50001 111.5V72L14.5 67L79.5 70L90.5 84V108Z"
          fill="#313131"
          @mouseenter="FillPath($event)"
          @mouseleave="FillPath($event, '#313131')"
          class="transition-all"
        />
        <path
          d="M2.52736 73.2258L14.5 67L9.5 71.5V114C10.5705 118.042 12.2901 119.403 17 120.5L78.5 116L63 136.5L56.5 133H7.5C3.40021 131.605 2.22352 130.142 1 127L1.98889 74.0943C1.99574 73.728 2.20233 73.3948 2.52736 73.2258Z"
          fill="#0E0E0E"
        />
        <path
          d="M80 70L14.5 67M14.5 67L2.52736 73.2258C2.20233 73.3948 1.99574 73.728 1.98889 74.0943L1 127C2.22352 130.142 3.40021 131.605 7.5 133H56.5L63 136.5L78.5 116L17 120.5C12.2901 119.403 10.5705 118.042 9.5 114V71.5L14.5 67Z"
          stroke="black"
        />
      </g>

      <g class="transition-all" @click="RigthBut($event)">
        <path
          d="M129.5 118L114 108L113 82L130.5 71L191 68C195.267 68.955 196.581 70.479 197.5 74.5V114C194.605 118.378 192.182 119.483 187 120C165.478 119.233 153.808 118.178 133.5 115.5L129.5 118Z"
          fill="#313131"
          @mouseenter="FillPath($event)"
          @mouseleave="FillPath($event, '#313131')"
          class="transition-all"
        />
        <path
          d="M134.5 116C132.245 115.838 131.249 116.356 130 118.5V132.5C131.653 130.079 132.916 129.236 136 129L183.5 128.5C191.631 128.084 194.388 123.245 197 115C195.283 118.082 193.172 118.502 186.5 120C164.667 118.806 153.298 118.316 134.5 116Z"
          fill="#0E0E0E"
        />
        <path
          d="M197 115C195.283 118.082 193.172 118.502 186.5 120C164.667 118.806 153.298 118.316 134.5 116C132.245 115.838 131.249 116.356 130 118.5V132.5C131.653 130.079 132.916 129.236 136 129L183.5 128.5C191.631 128.084 194.388 123.245 197 115ZM197 115L197.5 73L194.5 68L131.5 70.5"
          stroke="black"
        />
      </g>

      <g class="transition-all" @click="TopBut($event)">
        <path
          d="M78 70.5L90 84L113.5 82L132 72C129.445 69.7402 129.229 68.5694 129 65L130.5 7C129.323 3.28 127.921 2.0706 124.5 1H83.5C79.5142 1.87497 78.3404 2.98754 78 6L80 69.5L78 70.5Z"
          fill="#313131"
          @mouseenter="FillPath($event)"
          @mouseleave="FillPath($event, '#313131')"
          class="transition-all"
        />
        <path d="M80 70L63 69L65.5 66L65 13L77.5 5.5L80 70Z" fill="#0E0E0E" />
        <path
          d="M77.5 5.5L80 70L63 69L65.5 66L65 13L77.5 5.5ZM77.5 5.5C78.8438 3.38842 79.8508 2.42081 82 1H125C128.894 1.64403 130.532 4.20632 130.5 7.5L129 66.5C128.961 69.969 129.949 70.6085 132 70.5"
          stroke="black"
        />
      </g>

      <circle
        cx="102.5"
        cy="95"
        r="16.5"
        fill="#2A2A2A"
        stroke="black"
        stroke-width="2"
      />
      <defs>
        <filter
          id="filter0_d_103_92"
          x="73.5"
          y="108"
          width="60.5"
          height="85"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_92"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_92"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
import ReqApi from '../utils/ReqApi'


export default {
  name: "Pokedex-Svg",
  data() {
    return {
      isOnPokedex: false,
      isOnSprite: ["animate-pulse", "animate-none", "opacity-100"],
      isOnSpriteValue: 1,
      pokemonBrut: false,
    };
  },
  props: {
    pokemon: Object,
  },
  methods: {
    LeftBut: async function () {
      if (this.DataPokemonProcess.id && this.DataPokemonProcess.id != 1) {
        try {
          let value = [5, 3, 4];
          this.pokemonBrut = await ReqApi.Pokemon(this.DataPokemonProcess.id - value[this.DataPokemonProcess.id % 3])
          this.OnPokedex();
        } catch (err) {
          console.error(err);
        }
      }
    },
    RigthBut: async function () {
      if (this.DataPokemonProcess.id) {
        try {
          let value = [1, 3, 2];
          this.pokemonBrut = await ReqApi.Pokemon(this.DataPokemonProcess.id + value[this.DataPokemonProcess.id % 3])
          this.OnPokedex();
        } catch (err) {
          console.error(err);
        }
      }
    },
    BottomBut:async function () {
      if (this.DataPokemonProcess.id && this.DataPokemonProcess.id % 3 != 1) {
        try{
          this.pokemonBrut = await ReqApi.Pokemon(this.DataPokemonProcess.id - 1)
          this.OnPokedex();  
        }catch(err){
          console.error(err)
        }
      }
    },
    TopBut: async function () {
      if (this.DataPokemonProcess.id && this.DataPokemonProcess.id % 3 != 0) {
        try{
          this.pokemonBrut = await ReqApi.Pokemon(this.DataPokemonProcess.id + 1)
          this.OnPokedex();  
        }catch(err){
          console.error(err)
        }
      }
    },
    FillPath: function ($event, color) {
      $event.srcElement.attributes[2].value = color || "#282828";
    },
    OnPokedex: async function () {
      if(!this.DataPokemonProcess) return
      setTimeout(() => {
        this.isOnPokedex = false;
        this.isOnSpriteValue = 2;
        this.DataPokemonProcess.sprite = this.pokemonBrut.sprites.front_default;
      }, 3000);
      this.isOnPokedex = true;
      this.isOnSpriteValue = 0;
    },
  },
  computed: {
    DataPokemonProcess: function () {
      if (this.pokemonBrut) {
        return {
          name: this.pokemonBrut.name,
          sprite: this.pokemonBrut.sprites.back_default,
          id: this.pokemonBrut.id,
        };
      }
      return {
        name: "",
        sprite: "",
        id: false,
      };
    },
  },
  watch: {
    pokemon(newValue) {
      if (newValue) {
        this.pokemonBrut = this.pokemon
        this.OnPokedex();
      }
    },
  },
};
</script>

<style scoped>
#Button {
  position: relative;
  top: -364px;
  left: 158px;
}
#Brilliance {
  position: relative;
  top: -499px;
  left: 2px;
}
#Sprite {
  position: relative;
  top: -255px;
  left: 70px;
  z-index: 2;
  opacity: 0;
}
</style>