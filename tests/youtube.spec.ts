import { test } from "@playwright/test";
test("Calculate youtube playlist duration", async ({ page }) => {
  let totalMinutes = 0;
  const url =
    "https://www.youtube.com/playlist?list=PL699Xf-_ilW7EyC6lMuU4jelKemmS6KgD";

  await page.goto(url);
  const videos = await page.$$('//div[@class="badge-shape-wiz__text"]');
  console.log(videos.length);
  await Promise.all(
    videos.map(async (ele) => {
      const duration = await ele.innerText();
      const timeSlices = duration.trim().split(":");
      let minutes = 0;
      let seconds = 0;
      duration;
      if (timeSlices.length == 2) {
        minutes = Number(timeSlices[0]);
        seconds = Number(timeSlices[1]);
        minutes += seconds / 60;
      } else if (timeSlices.length == 3) {
        const hours = Number(timeSlices[0]);
        minutes = Number(timeSlices[1]);
        seconds = Number(timeSlices[2]);
        minutes += hours * 60 + seconds / 60;
      }
      totalMinutes += minutes;
    }),
  );
  console.log(totalMinutes);
});
