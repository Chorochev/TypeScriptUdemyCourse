{
  // Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
  enum ETypesOfMedia {
    VIDEO = "video",
    AUDIO = "audio",
  }
  // Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
  enum EFormatsOfMedia {
    MP4 = ".mp4",
    MOV = ".mov",
    MKV = ".mkv",
    FLV = ".flv",
    WEBM = ".webM",
  }
  // Описание интерфейса, в котором:
  // name - строка
  // type - один из перечисления выше
  // format = один из перечисления выше
  // subtitles - необязательное поле типа строка
  // marks - необязательное поле неизвестного типа
  interface IPlayMediaData {
    name: string;
    type: ETypesOfMedia;
    format: EFormatsOfMedia;
    subtitles?: string;
    marks?: unknown;
  }

  function playMedia(data: IPlayMediaData): string {
    let marksLog;
    // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
    if (Array.isArray(data.marks)) {
      marksLog = data.marks.join(", ");
    } else if (typeof data.marks === "string") {
      // Если это строка, то просто поместить её в marksLog
      marksLog = data.marks;
    } else {
      // Если что-то другое - то marksLog = "Unsupported type of marks"
      marksLog = "Unsupported type of marks";
    }

    // Не допускайте any!
    console.log(`Media ${data.name}${data.format} is ${data.type}
      Marks: ${marksLog}
      Subtitles: ${data.subtitles ?? "none"}`);
    // помните что это за оператор ??
    return "Media started";
  }

  const mediaDate1: IPlayMediaData = {
    name: "WoW",
    format: EFormatsOfMedia.FLV,
    type: ETypesOfMedia.AUDIO,
    subtitles: "hmhmhm hmhmhm doh",
    marks: ["4:30", "5:40"],
  };

  const mediaDate2: IPlayMediaData = {
    name: "Well",
    format: EFormatsOfMedia.MOV,
    type: ETypesOfMedia.VIDEO,
  };

  playMedia(mediaDate1);
  mediaDate1.marks = "test string";
  playMedia(mediaDate1);
  mediaDate1.marks = 100;
  playMedia(mediaDate1);
  playMedia(mediaDate2);
}
