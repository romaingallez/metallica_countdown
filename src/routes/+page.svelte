<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { format, intervalToDuration } from 'date-fns';
  import { utcToZonedTime, zonedTimeToUtc} from 'date-fns-tz';

  const targetDateTime = zonedTimeToUtc('2023-05-17T18:00:00', 'Europe/Paris');
  const targetDate = utcToZonedTime(targetDateTime, 'Europe/Paris');

  let intervalId: number;
  let duration: Duration = intervalToDuration({ start: new Date(), end: targetDate });

  function tick() {
    duration = intervalToDuration({ start: new Date(), end: targetDate });
  }

  onMount(() => {
    intervalId = setInterval(tick, 1000);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });

  const leadingZero = (num: number) => num.toString().padStart(2, '0');

  $: days = leadingZero(duration.days ?? 0);
  $: hours = leadingZero(duration.hours ?? 0);
  $: minutes = leadingZero(duration.minutes ?? 0);
  $: seconds = leadingZero(duration.seconds ?? 0);

  const formatDate = (date: Date) => format(date, 'dd/MM/yyyy HH:mm:ss z');

  $: targetDateString = formatDate(targetDate);




 

</script>

<style>

    main {
      font-family: 'Questrial', sans-serif;
    }

    .background {
      /* background-color: yellow; */
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      /* background-image: url('/72-seasons_home-slider.webp'); */
      background-image: url('https://upload.wikimedia.org/wikipedia/commons/9/9a/Metallica_Live_at_The_O2%2C_London%2C_England%2C_22_October_2017_%28cropped%29.jpg');
      /* background-image: url('background.webp'); */
    }
</style>


<svelte:head>
  <link rel="preconnect" href="https://fonts.bunny.net">
  <link href="https://fonts.bunny.net/css?family=didact-gothic:400|questrial:400|rampart-one:400" rel="stylesheet" />

  <!-- HTML Meta Tags -->
  <title>Metallica: M72 World Tour</title>
  <meta name="description" content="">
  <link rel="icon" type="image/svg" href="/favicon.png" />


  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://metallica.romaingallez.fr/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Metallica: M72 World Tour">
  <meta property="og:description" content="">
  <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Metallica_wordmark.svg/640px-Metallica_wordmark.svg.pngLe">

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://metallica.romaingallez.fr/">
  <meta name="twitter:title" content="Metallica: M72 World Tour">
  <meta name="twitter:description" content="">
  <meta name="twitter:image" content="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Metallica_wordmark.svg/640px-Metallica_wordmark.svg.png">

  <!-- Meta Tags Generated via https://www.opentags.io -->
  <!-- Paste them in your <head> section of your website. -->
      


</svelte:head>
  


<!--  -->

<main class="background h-screen flex flex-col items-center justify-center">
  <div class="flex flex-col items-center text-center">
    <!-- <div>
      <img src="/640px-Metallica_wordmark.svg.png" alt="metallica logo">
    </div> -->
    <div class="text-5xl font-bold mb-2 text-white">
      Countdown to Metallica
    </div>
    <div class="mb-2">
      <span class="text-sm text-gray-400">{targetDateString}</span>
    </div>
    <div class="flex space-x-2">
      <div class="text-2xl font-bold">
        <span class="text-white">{days}</span> <span class="text-sm text-gray-400">Days</span>
      </div>
      <div class="text-2xl font-bold">
        <span class="text-white">{hours}</span> <span class="text-sm text-gray-400">Hours</span>
      </div>
      <div class="text-2xl font-bold">
        <span class="text-white">{minutes}</span> <span class="text-sm text-gray-400">Minutes</span>
      </div>
      <div class="text-2xl font-bold">
        <span class="text-white">{seconds}</span> <span class="text-sm text-gray-400">Seconds</span>
      </div>
    </div>
  </div>
</main>

