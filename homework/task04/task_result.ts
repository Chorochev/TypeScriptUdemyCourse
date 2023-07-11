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
    // Если это строка, то просто поместить её в marksLog
    // Если что-то другое - то marksLog = "Unsupported type of marks"
    // Не допускайте any!
    console.log(`Media ${data.name}${data.format} is ${data.type}
      Marks: ${marksLog}
      Subtitles: ${data.subtitles ?? "none"}`);
    // помните что это за оператор ??
    return "Media started";
  }

  playMedia({
    name: "WoW",
    format: EFormatsOfMedia.FLV,
    type: ETypesOfMedia.AUDIO,
    subtitles: "hmhmhm hmhmhm doh",
    marks: ["4:30", "5:40"],
  });
}
