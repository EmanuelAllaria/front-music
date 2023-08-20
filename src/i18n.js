import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  Ingles: {
    translation: {
      header: {
        music: "Music",
        reports: "Reports",
        support: "Support",
        account: "My Account",
        register: "Register",
        login: "Login",
        languages: {
          es: "Spanish",
          en: "English",
          po: "Portuguese",
          ca: "Catalan",
          it: "Italian",
          fr: "French",
        },
      },
      footer: {
        copy: "All rights reserved.",
      },
      home: {
        title: ["Upload your", "Music"],
        subtitle: "Share your musical talent with the world.",
        titleReleaseCreate: "Create Release",
        buttonReleaseCreate: "Create New",
        titleSectionRelease: ["My", "Catalogs"],
        typeCard: "by: ",
        butonAddMusics: "Edit Songs",
        noReleases: "No releases available",
      },
      createRelease: {
        title: "Create a Release",
        subtitlePrimary: "New Album",
        subtitleSecondary: "Upload album cover",
        subtitleTertiary: "Additional Information",
        titleRelease: "Title of album, EP, or single",
        addArtist: "Enter artist",
        addGenres: "Enter genre",
        addDate: "Enter release date",
        addTime: "Enter release time",
        messageImage: `Your cover must be:
          Size: 3000 - 3000 pixels (in square format) Format:
          JPG, TIFF, or PNG (max. 36 MB; RGB mode) You must own
          the rights to the design and to every image or visual element
          it contains. The design information must be coherent
          with all the information entered in the release metadata.
          Stores will reject blurry, low-quality images or those
          containing any URL, email address, phone number,
          barcode, price, or trademarks logos.
          Furthermore, the cover should not contain any explicit
          or offensive material, such as pornography or hate speech.
          Any design that does not meet the store's requirements will be rejected.`,
        addUrlSpotify: "Enter your Spotify profile URL",
        addUrlAppleMusic: "Enter your Apple Music profile URL",
        addRecordLabel: "Enter record label",
        addTypeLaunch: {
          label: "Enter the type of launch.",
          optionPrimary: "Select one",
          optionSecondary: "Single",
          optionTertiary: "EP",
          optionQuarter: "Album",
        },
        addCodeUPC: "Enter UPC/EAN code",
        buttonNext: "Next",
      },
      editRelease: {
        title: "Edit Release",
        button: "Save",
      },
      deleteRelease: {
        alert: "Are you sure you want to delete this release?",
      },
      createMusic: {
        typeRelease: "Release Type:",
        artist: "Main Artist:",
        genreRelease: "Genre of the ",
        dateLaunch: "Release Date:",
        timeLaunch: "Release Time:",
        recordLabel: "Record Label:",
        urlSpotify: "Spotify URL:",
        urlAppleMusic: "Apple Music URL:",
        codeUPC: "UPC Code:",
        noMusic: "No music added",
        artistMusicSecu: "Supporting artist:",
        typeMusic: "Type:",
        deleteMusic: "Are you sure to delete this music?",
        titleCreateMusic: "Add the music",
        titleEditMusic: "Edit the song",
        titleMusic: "Song title",
        releaseMusic: "Song version",
        addArtistSecondary: "Add the supporting artist",
        addMusic: "Upload your audio '.wav' here!",
        typeContent: {
          label: "Enter the content type",
          explicit: "Explicit",
          clean: "Clean",
        },
        timeTokTokMusic: "Enter the time to appear on tiktok",
        wasInStores: {
          label: "Was this song in stores?",
          yes: "Yes",
          no: "No",
        },
        codeISRC: "Add the ISRC code",
        dateLaunchMusic: "Enter the date the song came out",
        buttonSave: "Save",
        buttonCancel: "Cancel",
      },
      support: {
        subject: "Subject",
        message: "Problem description",
        image: "Upload file",
        audio: "Upload audio",
        send: "Send ticket",
      },
    },
  },
  Español: {
    translation: {
      header: {
        music: "Música",
        reports: "Informes",
        support: "Soporte",
        account: "Mi Cuenta",
        register: "Registrarse",
        login: "Iniciar Sesión",
        languages: {
          es: "Español",
          en: "Ingles",
          po: "Portugues",
          ca: "Catalan",
          it: "Italiano",
          fr: "Frances",
        },
      },
      footer: {
        copy: "Todos los derechos reservados.",
      },
      home: {
        title: ["Sube tu", "Música"],
        subtitle: "Comparte tu talento musical con el mundo.",
        titleReleaseCreate: "Crear Versión",
        buttonReleaseCreate: "Crear Nuevo",
        titleSectionRelease: ["Mis", "Catálogos"],
        typeCard: "por: ",
        butonAddMusics: "Editar músicas",
        noReleases: "No tiene versiones",
      },
      createRelease: {
        title: "Crear una versión",
        subtitlePrimary: "Nuevo Album",
        subtitleSecondary: "Subir carátula del album",
        subtitleTertiary: "Información adicional",
        titleRelease: "Título del álbum, EP o sencillo",
        addArtist: "Ingrese el artista",
        addGenres: "Ingrese el genero",
        addDate: "Ingrese la fecha de lanzamiento",
        addTime: "Ingrese el horario de lanzamiento",
        messageImage: `Tu portada debe ser:
          Tamaño: 3000 - 3000 píxeles (en formato cuadrado) Formato:
          JPG, TIFF o PNG (máx. 36 MB; modo RGB) Debes ser propietario
          de los derechos del diseño y de cada imagen o elemento visual
          que éste contenga. La información del diseño debe ser
          coherente con toda la información ingresada en los metadatos
          del lanzamiento.
          Las tiendas rechazarán imágenes borrosas, de baja calidad o si
          contienen alguna URL, correo electrónico, número de teléfono,
          código de barras, precio o logotipos de marcas registradas.
          Además, la portada no debe contener ningún material explícito
          o indignante, como pornografía o discursos de odio. Cualquier
          diseño que no cumpla con los requisitos de las tiendas será
          rechazado.`,
        addUrlSpotify: "Ingrese la url de su perfil de Spotify",
        addUrlAppleMusic: "Ingrese la url de su perfil de Apple Music",
        addRecordLabel: "Ingrese el sello discográfico",
        addTypeLaunch: {
          label: "Ingrese el tipo de lanzamiento",
          optionPrimary: "Seleccione uno",
          optionSecondary: "Sencillo",
          optionTertiary: "EP",
          optionQuarter: "Album",
        },
        addCodeUPC: "Ingrese el código UPC/EAN",
        buttonNext: "Siguiente",
      },
      editRelease: {
        title: "Editar Versión",
        button: "Guardar",
      },
      deleteRelease: {
        alert: "¿Estás seguro de borrar esta versión?",
      },
      createMusic: {
        typeRelease: "Tipo de la versión:",
        artist: "Artista Principal:",
        genreRelease: "Genero del",
        dateLaunch: "Fecha de lanzamiento:",
        timeLaunch: "Hora de lanzamiento:",
        recordLabel: "Sello discografico:",
        urlSpotify: "Url del Spotify:",
        urlAppleMusic: "Url del Apple Music:",
        codeUPC: "Codigo UPC:",
        noMusic: "No hay músicas agregadas",
        artistMusicSecu: "Artista secundario:",
        typeMusic: "Tipo:",
        deleteMusic: "¿Estás seguro de eliminar esta canción?",
        titleCreateMusic: "Agregar la canción",
        titleEditMusic: "Editar la canción",
        titleMusic: "Título de la canción",
        releaseMusic: "Versión de la canción",
        addArtistSecondary: "Agregar el artista de apoyo",
        addMusic: "Carga tu archivo de audio '.wav' aquí",
        typeContent: {
          label: "Ingresa el tipo de contenido",
          explicit: "Explícito",
          clean: "Limpio",
        },
        timeTokTokMusic: "Ingresa el tiempo para aparecer en TikTok",
        wasInStores: {
          label: "¿Esta canción estuvo en tiendas?",
          yes: "Sí",
          no: "No",
        },
        codeISRC: "Agregar el código ISRC",
        dateLaunchMusic: "Ingresa la fecha de lanzamiento de la canción",
        buttonSave: "Guardar",
        buttonCancel: "Cancelar",
      },
      support: {
        subject: "Sujeto",
        message: "Descripción del problema",
        image: "Carga de archivo",
        audio: "Carga de audio",
        send: "Enviar ticket",
      },
    },
  },
  Portugues: {
    translation: {
      header: {
        music: "Música",
        reports: "Relatórios",
        support: "Suporte",
        account: "Minha Conta",
        register: "Registro",
        login: "Entrar",
        languages: {
          es: "Espanhol",
          en: "Inglês",
          po: "Português",
          ca: "Catalão",
          it: "Italiano",
          fr: "Francês",
        },
      },
      footer: {
        copy: "Todos os direitos reservados.",
      },
      home: {
        title: ["Carregue o seu", "Música"],
        subtitle: "Compartilhe o seu talento musical com o mundo.",
        titleReleaseCreate: "Criar Versão",
        buttonReleaseCreate: "Criar Novo",
        titleSectionRelease: ["Minhas", "Catálogos"],
        typeCard: "por: ",
        butonAddMusics: "Editar músicas",
        noReleases: "Não possui versões",
      },
      createRelease: {
        title: "Criar uma versão",
        subtitlePrimary: "Novo Álbum",
        subtitleSecondary: "Carregar capa do álbum",
        subtitleTertiary: "Informações adicionais",
        titleRelease: "Título do álbum, EP ou single",
        addArtist: "Digite o artista",
        addGenres: "Digite o gênero",
        addDate: "Digite a data de lançamento",
        addTime: "Digite o horário de lançamento",
        messageImage: `A sua capa deve ter:
          Tamanho: 3000 - 3000 pixels (em formato quadrado) Formato:
          JPG, TIFF ou PNG (máx. 36 MB; modo RGB) Você deve possuir
          os direitos do design e de cada imagem ou elemento visual
          que ele contém. A informação do design deve ser coerente
          com todas as informações inseridas nos metadados da versão.
          As lojas rejeitarão imagens borradas, de baixa qualidade ou aquelas
          que contenham qualquer URL, endereço de email, número de telefone,
          código de barras, preço ou logotipos de marcas registradas.
          Além disso, a capa não deve conter material explícito
          ou ofensivo, como pornografia ou discursos de ódio. Qualquer
          design que não atenda aos requisitos da loja será rejeitado.`,
        addUrlSpotify: "Digite a URL do seu perfil de Spotify",
        addUrlAppleMusic: "Digite a URL do seu perfil de Apple Music",
        addRecordLabel: "Digite a gravadora",
        addTypeLaunch: {
          label: "Digite o tipo de lançamento.",
          optionPrimary: "Selecione um",
          optionSecondary: "Sencillo",
          optionTertiary: "EP",
          optionQuarter: "Álbum",
        },
        addCodeUPC: "Digite o código UPC/EAN",
        buttonNext: "Próximo",
      },
      editRelease: {
        title: "Editar Versão",
        button: "Salvar",
      },
      deleteRelease: {
        alert: "Tem certeza de que deseja excluir esta versão?",
      },
      createMusic: {
        typeRelease: "Tipo de Versão:",
        artist: "Artista Principal:",
        genreRelease: "Gênero da Versão:",
        dateLaunch: "Data de Lançamento:",
        timeLaunch: "Hora de Lançamento:",
        recordLabel: "Gravadora:",
        urlSpotify: "URL do Spotify:",
        urlAppleMusic: "URL do Apple Music:",
        codeUPC: "Código UPC:",
        noMusic: "Nenhuma música adicionada",
        artistMusicSecu: "Artista coadjuvante:",
        typeMusic: "Tipo:",
        deleteMusic: "Tem certeza de que deseja excluir esta música?",
        titleCreateMusic: "Adicionar a música",
        titleEditMusic: "Editar a música",
        titleMusic: "Título da música",
        releaseMusic: "Versão da música",
        addArtistSecondary: "Adicionar o artista de apoio",
        addMusic: "Carregue o seu arquivo de áudio '.wav' aqui!",
        typeContent: {
          label: "Digite o tipo de conteúdo",
          explicit: "Explícito",
          clean: "Limpo",
        },
        timeTokTokMusic: "Digite o tempo para aparecer no TikTok",
        wasInStores: {
          label: "Essa música estava nas lojas?",
          yes: "Sim",
          no: "Não",
        },
        codeISRC: "Adicione o código ISRC",
        dateLaunchMusic: "Digite a data de lançamento da música",
        buttonSave: "Salvar",
        buttonCancel: "Cancelar",
      },
      support: {
        subject: "Sujeito",
        message: "Descrição do problema",
        image: "Carregar arquivo",
        audio: "Carregar áudio",
        send: "Enviar ticket",
      },
    },
  },
  Catalan: {
    translation: {
      header: {
        music: "Música",
        reports: "Informes",
        support: "Suport",
        account: "El Meu Compte",
        register: "Registrar-se",
        login: "Iniciar Sessió",
        languages: {
          es: "Espanyol",
          en: "Anglès",
          po: "Portuguès",
          ca: "Català",
          it: "Italiano",
          fr: "Francès",
        },
      },
      footer: {
        copy: "Tots els drets reservats.",
      },
      home: {
        title: ["Puja el teu", "Música"],
        subtitle: "Comparteix el teu talent musical amb el món.",
        titleReleaseCreate: "Crear Versió",
        buttonReleaseCreate: "Crear Nou",
        titleSectionRelease: ["Les Meves", "Catàlegs"],
        typeCard: "per: ",
        butonAddMusics: "Editar músiques",
        noReleases: "No té versions",
      },
      createRelease: {
        title: "Crear una versió",
        subtitlePrimary: "Nou àlbum",
        subtitleSecondary: "Puja la portada de l'àlbum",
        subtitleTertiary: "Informació addicional",
        titleRelease: "Títol de l'àlbum, EP o senzill",
        addArtist: "Introdueixi l'artista",
        addGenres: "Introdueixi el gènere",
        addDate: "Introdueixi la data de llançament",
        addTime: "Introdueixi l'hora de llançament",
        messageImage: `La vostra portada ha de tenir:
          Mida: 3000 - 3000 píxels (en format quadrat) Format:
          JPG, TIFF o PNG (màx. 36 MB; mode RGB) Heu de ser
          propietari dels drets del disseny i de cada imatge o element visual
          que aquest contingui. La informació del disseny ha de ser coherent
          amb tota la informació introduïda en les metadades de la versió.
          Les botigues rebutjaran imatges desenfocades, de baixa qualitat o aquelles
          que continguin qualsevol URL, adreça de correu electrònic, número de telèfon,
          codi de barres, preu o logotips de marques registrades.
          A més, la portada no ha de contenir material explícit
          ni ofensiu, com pornografia o discursos de l'odi. Qualsevol
          disseny que no compleixi amb els requisits de la botiga serà rebutjat.`,
        addUrlSpotify: "Introdueixi l'URL del seu perfil de Spotify",
        addUrlAppleMusic: "Introdueixi l'URL del seu perfil de Apple Music",
        addRecordLabel: "Introdueixi la discogràfica",
        addTypeLaunch: {
          label: "Introdueix el tipus de llançament.",
          optionPrimary: "Seleccioneu un",
          optionSecondary: "Senzill",
          optionTertiary: "EP",
          optionQuarter: "Àlbum",
        },
        addCodeUPC: "Introdueixi el codi UPC/EAN",
        buttonNext: "Següent",
      },
      editRelease: {
        title: "Editar Versió",
        button: "Guardar",
      },
      deleteRelease: {
        alert: "Esteu segur que voleu esborrar aquesta versió?",
      },
      createMusic: {
        typeRelease: "Tipus de Versió:",
        artist: "Artista Principal:",
        genreRelease: "Gènere de la Versió:",
        dateLaunch: "Data de Llançament:",
        timeLaunch: "Hora de Llançament:",
        recordLabel: "Discogràfica:",
        urlSpotify: "URL del Spotify:",
        urlAppleMusic: "URL del Apple Music:",
        codeUPC: "Codi UPC:",
        noMusic: "Cap música afegida",
        artistMusicSecu: "Artista secundari:",
        typeMusic: "Tipus:",
        deleteMusic: "Esteu segur que voleu esborrar aquesta música?",
        titleCreateMusic: "Afegir la música",
        titleEditMusic: "Editar la cançó",
        titleMusic: "Títol de la música",
        releaseMusic: "Versió de la música",
        addArtistSecondary: "Afegir l'artista de suport",
        addMusic: "Carregueu el vostre arxiu d'àudio '.wav' aquí!",
        typeContent: {
          label: "Introduïu el tipus de contingut",
          explicit: "Explícit",
          clean: "Net",
        },
        timeTokTokMusic: "Introduïu el temps per aparèixer a TikTok",
        wasInStores: {
          label: "Aquesta música estava a les botigues?",
          yes: "Sí",
          no: "No",
        },
        codeISRC: "Afegiu el codi ISRC",
        dateLaunchMusic: "Introduïu la data de llançament de la música",
        buttonSave: "Guardar",
        buttonCancel: "Cancel·lar",
      },
      support: {
        subject: "Subjecte",
        message: "Descripció del problema",
        image: "Puja de fitxer",
        audio: "Puja d'àudio",
        send: "Enviar tiquet",
      },
    },
  },
  Italiano: {
    translation: {
      header: {
        music: "Musica",
        reports: "Report",
        support: "Supporto",
        account: "Il Mio Account",
        register: "Registrati",
        login: "Accedi",
        languages: {
          es: "Spagnolo",
          en: "Inglese",
          po: "Portoghese",
          ca: "Catalano",
          it: "Italiano",
          fr: "Francese",
        },
      },
      footer: {
        copy: "Tutti i diritti riservati.",
      },
      home: {
        title: ["Carica il tuo", "Musica"],
        subtitle: "Condividi il tuo talento musicale con il mondo.",
        titleReleaseCreate: "Crea Versione",
        buttonReleaseCreate: "Crea Nuova",
        titleSectionRelease: ["Le Mie", "Cataloghi"],
        typeCard: "per: ",
        butonAddMusics: "Modifica brani",
        noReleases: "Nessuna versione presente",
      },
      createRelease: {
        title: "Crea una versione",
        subtitlePrimary: "Nuovo Album",
        subtitleSecondary: "Carica copertina dell'album",
        subtitleTertiary: "Informazioni aggiuntive",
        titleRelease: "Titolo dell'album, EP o singolo",
        addArtist: "Inserisci l'artista",
        addGenres: "Inserisci il genere",
        addDate: "Inserisci la data di pubblicazione",
        addTime: "Inserisci l'orario di pubblicazione",
        messageImage: `La tua copertina deve avere:
          Dimensioni: 3000 - 3000 pixel (in formato quadrato) Formato:
          JPG, TIFF o PNG (max 36 MB; modalità RGB) Devi possedere
          i diritti del design e di ogni immagine o elemento visivo
          che essa contiene. Le informazioni sul design devono essere coerenti
          con tutte le informazioni inserite nei metadati della versione.
          I negozi respingeranno immagini sfocate, di bassa qualità o quelle
          che contengono URL, indirizzi email, numeri di telefono,
          codici a barre, prezzi o loghi di marchi registrati.
          Inoltre, la copertina non deve contenere materiale esplicito
          o offensivo, come pornografia o discorsi d'odio. Qualsiasi
          design che non rispetti i requisiti del negozio verrà respinto.`,
        addUrlSpotify: "Inserisci l'URL del tuo profilo Spotify",
        addUrlAppleMusic: "Inserisci l'URL del tuo profilo Apple Music",
        addRecordLabel: "Inserisci l'etichetta discografica",
        addTypeLaunch: {
          label: "Inserisci il tipo di lancio.",
          optionPrimary: "Seleziona uno",
          optionSecondary: "Singolo",
          optionTertiary: "EP",
          optionQuarter: "Album",
        },
        addCodeUPC: "Inserisci il codice UPC/EAN",
        buttonNext: "Avanti",
      },
      editRelease: {
        title: "Modifica Versione",
        button: "Salva",
      },
      deleteRelease: {
        alert: "Sei sicuro di voler eliminare questa versione?",
      },
      createMusic: {
        typeRelease: "Tipo di Versione:",
        artist: "Artista Principale:",
        genreRelease: "Genere della Versione:",
        dateLaunch: "Data di Pubblicazione:",
        timeLaunch: "Ora di Pubblicazione:",
        recordLabel: "Etichetta Discografica:",
        urlSpotify: "URL di Spotify:",
        urlAppleMusic: "URL di Apple Music:",
        codeUPC: "Codice UPC:",
        noMusic: "Nessuna musica aggiunta",
        artistMusicSecu: "Artista sostenitore:",
        typeMusic: "Tipo:",
        deleteMusic: "Sei sicuro di voler eliminare questa musica?",
        titleCreateMusic: "Aggiungi la musica",
        titleEditMusic: "Modifica il brano",
        titleMusic: "Titolo della musica",
        releaseMusic: "Versione della musica",
        addArtistSecondary: "Aggiungi artista di supporto",
        addMusic: "Carica il tuo file audio '.wav' qui!",
        typeContent: {
          label: "Inserisci il tipo di contenuto",
          explicit: "Esplicito",
          clean: "Pulito",
        },
        timeTokTokMusic: "Inserisci il tempo per apparire su TikTok",
        wasInStores: {
          label: "Questa musica era nei negozi?",
          yes: "Sì",
          no: "No",
        },
        codeISRC: "Aggiungi il codice ISRC",
        dateLaunchMusic: "Inserisci la data di pubblicazione della musica",
        buttonSave: "Salva",
        buttonCancel: "Annulla",
      },
      support: {
        subject: "Soggetto",
        message: "Descrizione del problema",
        image: "Carica file",
        audio: "Carica audio",
        send: "Invia ticket",
      },
    },
  },
  Frances: {
    translation: {
      header: {
        music: "Musique",
        reports: "Rapports",
        support: "Support",
        account: "Mon Compte",
        register: "S'inscrire",
        login: "Se Connecter",
        languages: {
          es: "Espagnol",
          en: "Anglais",
          po: "Portugais",
          ca: "Catalan",
          it: "Italien",
          fr: "Français",
        },
      },
      footer: {
        copy: "Tous droits réservés.",
      },
      home: {
        title: ["Téléchargez votre", "Musique"],
        subtitle: "Partagez votre talent musical avec le monde.",
        titleReleaseCreate: "Créer Version",
        buttonReleaseCreate: "Créer Nouveau",
        titleSectionRelease: ["Mes", "Catalogues"],
        typeCard: "par : ",
        butonAddMusics: "Modifier les morceaux",
        noReleases: "Aucune version ajoutée",
      },
      createRelease: {
        title: "Créer une version",
        subtitlePrimary: "Nouvel Album",
        subtitleSecondary: "Télécharger la couverture de l'album",
        subtitleTertiary: "Informations supplémentaires",
        titleRelease: "Titre de l'album, de l'EP ou du single",
        addArtist: "Ajoutez l'artiste",
        addGenres: "Ajoutez le genre",
        addDate: "Ajoutez la date de sortie",
        addTime: "Ajoutez l'heure de sortie",
        messageImage: `Ta pochette doit respecter les critères suivants :
          Dimensions : 3000 x 3000 pixels (format carré) Format :
          JPG, TIFF ou PNG (maximum 36 Mo ; mode RVB) Tu dois posséder
          les droits sur le design et sur chaque image ou élément visuel
          qu'elle contient. Les informations du design doivent être cohérentes
          avec toutes les informations ajoutées aux métadonnées de la version.
          Les boutiques refuseront les images floues, de mauvaise qualité ou celles
          qui contiennent des URL, des adresses e-mail, des numéros de téléphone,
          des codes-barres, des prix ou des logos de marques déposées.
          De plus, la pochette ne doit pas contenir de contenu explicite
          ou offensant, comme de la pornographie ou des discours haineux. Tout
          design ne respectant pas les exigences de la boutique sera refusé.`,
        addUrlSpotify: "Ajoutez l'URL de ton profil Spotify",
        addUrlAppleMusic: "Ajoutez l'URL de ton profil Apple Music",
        addRecordLabel: "Ajoutez le label de la maison de disques",
        addTypeLaunch: {
          label: "Entrez le type de lancement.",
          optionPrimary: "Sélectionne une",
          optionSecondary: "Single",
          optionTertiary: "EP",
          optionQuarter: "Album",
        },
        addCodeUPC: "Ajoutez le code UPC/EAN",
        buttonNext: "Suivant",
      },
      editRelease: {
        title: "Modifier Version",
        button: "Enregistrer",
      },
      deleteRelease: {
        alert: "Es-tu sûr de vouloir supprimer cette version ?",
      },
      createMusic: {
        typeRelease: "Type de Version :",
        artist: "Artiste Principal :",
        genreRelease: "Genre de la Version :",
        dateLaunch: "Date de Sortie :",
        timeLaunch: "Heure de Sortie :",
        recordLabel: "Label de la Maison de Disques :",
        urlSpotify: "URL de Spotify :",
        urlAppleMusic: "URL d'Apple Music :",
        codeUPC: "Code UPC :",
        noMusic: "Aucune musique ajoutée",
        artistMusicSecu: "Artiste de soutien:",
        typeMusic: "Type :",
        deleteMusic: "Es-tu sûr de vouloir supprimer cette musique ?",
        titleCreateMusic: "Ajouter la musique",
        titleEditMusic: "Modifier la chanson",
        titleMusic: "Titre de la musique",
        releaseMusic: "Version de la musique",
        addArtistSecondary: "Ajoutez l'artiste de soutien",
        addMusic: "Charge ton fichier audio '.wav' ici !",
        typeContent: {
          label: "Saisis le type de contenu",
          explicit: "Explicite",
          clean: "Propre",
        },
        timeTokTokMusic: "Saisis le temps d'apparition sur TikTok",
        wasInStores: {
          label: "Cette musique était-elle en vente dans les boutiques ?",
          yes: "Oui",
          no: "Non",
        },
        codeISRC: "Ajoutez le code ISRC",
        dateLaunchMusic: "Saisis la date de sortie de la musique",
        buttonSave: "Enregistrer",
        buttonCancel: "Annuler",
      },
      support: {
        subject: "Sujet",
        message: "Description du problème",
        image: "Télécharger le fichier",
        audio: "Télécharger l'audio",
        send: "Envoyer le ticket",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
