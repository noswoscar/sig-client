<script lang="ts" type="module">
console.log("First Svelte Script");
let cities = ["Paris", "Marseille", "Aix", "Toulouse", "Toulon"]
</script>

<div>
    <h1>Map of France :</h1>
    <div class="mapBox">
        Cities on map: {cities}
    </div>
</div>

<style>
    .mapBox {
        width: 50vh;
        height: 50vh;
        background-color: lightblue;
        padding: 100px;
    }
</style>