<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { format, intervalToDuration } from 'date-fns';
    import { utcToZonedTime } from 'date-fns-tz';
    
    const targetDate = utcToZonedTime(new Date('2023-05-17T18:00:00.000Z'), 'Europe/Paris');
    
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
  
  <main class="bg-background h-screen flex flex-col items-center justify-center">

    <div class="flex flex-col items-center">
      <div class="text-5xl font-bold mb-2">
        Countdown Metallica
      </div>
      <div class="mb-2">
        <span class="text-sm text-gray-400">{targetDateString}</span>
      </div>
      <div class="flex space-x-2">
        <div class="text-2xl font-bold">
          {days} <span class="text-sm text-gray-400">Days</span>
        </div>
        <div class="text-2xl font-bold">
          {hours} <span class="text-sm text-gray-400">Hours</span>
        </div>
        <div class="text-2xl font-bold">
          {minutes} <span class="text-sm text-gray-400">Minutes</span>
        </div>
        <div class="text-2xl font-bold">
          {seconds} <span class="text-sm text-gray-400">Seconds</span>
        </div>
      </div>
    </div>
  </main>
