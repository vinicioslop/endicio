export interface Word {
    word: string;
    phonetic: string;
    phonetics: [
        {
            text: string;
            audio: string;
            sourceUrl: string;
            license: {
                name: string;
                url: string;
            }
        }
    ];
    meanings: [
        {
            partOfSpeech: string;
            definitions: [
                {
                    definition: string;
                    synonyms: [];
                    antonyms: [];
                    example?: string;
                }
            ],
            synonyms: [],
            antonyms: []
        }
    ],
    license: {
        name: string;
        url: string;
    },
    sourceUrls: []
}