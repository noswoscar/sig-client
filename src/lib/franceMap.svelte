<script lang="ts" type="module">
console.log("first svelte script");
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
        background-color: blue;
        padding: 100px;
    }
</style>