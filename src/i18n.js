import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  en: {
    translation: {
      header: {
        music: "Music",
        artist: "Artists",
        reports: "Reports",
        support: "Support",
        account: "My Account",
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
        title: ["My", "Music"],
        subtitle: [
          "Ready to share your music?",
          "We've got you covered. Just select a release type to get started:",
        ],
        titleReleaseCreate: "Create Release",
        buttonReleaseCreate: "Create New",
        titleSectionRelease: ["My", "Releases"],
        typeCard: "by: ",
        butonAddMusics: "Edit Songs",
        noReleases: "No releases available",
      },
      createRelease: {
        title: "Create a Release",
        subtitlePrimary: "Information",
        subtitleSecondary: "Cover",
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
          label: "Select one",
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
        genreRelease: "Genre of Release:",
        dateLaunch: "Release Date:",
        timeLaunch: "Release Time:",
        recordLabel: "Record Label:",
        urlSpotify: "Spotify URL:",
        urlAppleMusic: "Apple Music URL:",
        codeUPC: "UPC Code:",
        noMusic: "No music added",
        typeMusic: "Type:",
      },
    },
  },
  es: {
    translation: {
      header: {
        music: "Música",
        artist: "Artistas",
        reports: "Informes",
        support: "Soporte",
        account: "Mi Cuenta",
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
        title: ["Mi", "Música"],
        subtitle: [
          "¿Listo para sacar tu música?",
          "Te tenemos cubierto. Simplemente seleccione un tipo de versión para comenzar:",
        ],
        titleReleaseCreate: "Crear Versión",
        buttonReleaseCreate: "Crear Nuevo",
        titleSectionRelease: ["Mis", "Versiónes"],
        typeCard: "por: ",
        butonAddMusics: "Editar músicas",
        noReleases: "No tiene versiones",
      },
      createRelease: {
        title: "Crear una versión",
        subtitlePrimary: "Información",
        subtitleSecondary: "Portada",
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
          label: "Ingrese el sello discográfico",
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
        typeMusic: "Tipo:",
      },
    },
  },
  po: {
    translation: {
      header: {
        music: "Música",
        artist: "Artistas",
        reports: "Relatórios",
        support: "Suporte",
        account: "Minha Conta",
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
        title: ["Minha", "Música"],
        subtitle: [
          "Pronto para compartilhar sua música?",
          "Nós temos o que você precisa. Basta selecionar um tipo de versão para começar:",
        ],
        titleReleaseCreate: "Criar Versão",
        buttonReleaseCreate: "Criar Novo",
        titleSectionRelease: ["Minhas", "Versões"],
        typeCard: "por: ",
        butonAddMusics: "Editar músicas",
        noReleases: "Não possui versões",
      },
      createRelease: {
        title: "Criar uma versão",
        subtitlePrimary: "Informações",
        subtitleSecondary: "Capa",
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
          ou ofensivo, como pornografia ou discurso de ódio. Qualquer design
          que não atenda aos requisitos da loja será rejeitado.`,
        addUrlSpotify: "Digite a URL do seu perfil no Spotify",
        addUrlAppleMusic: "Digite a URL do seu perfil no Apple Music",
        addRecordLabel: "Digite a gravadora",
        addTypeLaunch: {
          label: "Selecione um",
          optionPrimary: "Selecione um",
          optionSecondary: "Single",
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
        timeLaunch: "Horário de Lançamento:",
        recordLabel: "Gravadora:",
        urlSpotify: "URL do Spotify:",
        urlAppleMusic: "URL do Apple Music:",
        codeUPC: "Código UPC:",
        noMusic: "Nenhuma música adicionada",
        typeMusic: "Tipo:",
      },
    },
  },
  ca: {
    translation: {
      header: {
        music: "Música",
        artist: "Artistes",
        reports: "Informes",
        support: "Suport",
        account: "El Meu Compte",
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
        title: ["La Meva", "Música"],
        subtitle: [
          "A punt per compartir la teva música?",
          "Tenim el que necessites. Simplement selecciona un tipus de versió per començar:",
        ],
        titleReleaseCreate: "Crear Versió",
        buttonReleaseCreate: "Crear Nou",
        titleSectionRelease: ["Les Meves", "Versions"],
        typeCard: "per: ",
        butonAddMusics: "Editar músiques",
        noReleases: "No té versions",
      },
      createRelease: {
        title: "Crear una versió",
        subtitlePrimary: "Informació",
        subtitleSecondary: "Portada",
        subtitleTertiary: "Informació addicional",
        titleRelease: "Títol de l'àlbum, EP o senzill",
        addArtist: "Introdueixi l'artista",
        addGenres: "Introdueixi el gènere",
        addDate: "Introdueixi la data de llançament",
        addTime: "Introdueixi l'horari de llançament",
        messageImage: `La vostra coberta ha de ser:
          Mida: 3000 - 3000 píxels (en format quadrat) Format:
          JPG, TIFF o PNG (màx. 36 MB; mode RGB) Heu de ser propietari
          dels drets del disseny i de cada imatge o element visual
          que contingui. La informació del disseny ha de ser coherent
          amb totes les dades introduïdes en les metadades de la versió.
          Les botigues rebutjaran imatges borroses, de baixa qualitat o aquelles
          que continguen qualsevol URL, adreça de correu electrònic, número de telèfon,
          codi de barres, preu o logotips de marques registrades.
          A més, la coberta no ha de contenir material explícit
          o ofensiu, com pornografia o discursos d'odi. Qualsevol disseny
          que no compleixi amb els requisits de la botiga serà rebutjat.`,
        addUrlSpotify: "Introdueixi l'URL del seu perfil de Spotify",
        addUrlAppleMusic: "Introdueixi l'URL del seu perfil d'Apple Music",
        addRecordLabel: "Introdueixi el segell discogràfic",
        addTypeLaunch: {
          label: "Seleccioneu un",
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
        button: "Desar",
      },
      deleteRelease: {
        alert: "Esteu segur que voleu eliminar aquesta versió?",
      },
      createMusic: {
        typeRelease: "Tipus de la Versió:",
        artist: "Artista Principal:",
        genreRelease: "Gènere de la Versió:",
        dateLaunch: "Data de Llançament:",
        timeLaunch: "Hora de Llançament:",
        recordLabel: "Segell Discogràfic:",
        urlSpotify: "URL del Spotify:",
        urlAppleMusic: "URL del Apple Music:",
        codeUPC: "Codi UPC:",
        noMusic: "Cap música afegida",
        typeMusic: "Tipus:",
      },
    },
  },
  it: {
    translation: {
      header: {
        music: "Musica",
        artist: "Artisti",
        reports: "Rapporti",
        support: "Supporto",
        account: "Il Mio Account",
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
        title: ["La Mia", "Musica"],
        subtitle: [
          "Pronto per condividere la tua musica?",
          "Abbiamo ciò di cui hai bisogno. Scegli semplicemente un tipo di versione per iniziare:",
        ],
        titleReleaseCreate: "Crea Versione",
        buttonReleaseCreate: "Crea Nuova",
        titleSectionRelease: ["Le Mie", "Versioni"],
        typeCard: "da: ",
        butonAddMusics: "Modifica canzoni",
        noReleases: "Nessuna versione disponibile",
      },
      createRelease: {
        title: "Crea una versione",
        subtitlePrimary: "Informazioni",
        subtitleSecondary: "Copertina",
        subtitleTertiary: "Informazioni aggiuntive",
        titleRelease: "Titolo dell'album, EP o singolo",
        addArtist: "Inserisci l'artista",
        addGenres: "Inserisci il genere",
        addDate: "Inserisci la data di uscita",
        addTime: "Inserisci l'orario di uscita",
        messageImage: `La tua copertina deve essere:
          Dimensioni: 3000 - 3000 pixel (in formato quadrato) Formato:
          JPG, TIFF o PNG (max 36 MB; modalità RGB) Devi essere proprietario
          dei diritti di design e di ogni immagine o elemento visivo
          che essa contiene. Le informazioni di design devono essere
          coerenti con tutte le informazioni inserite nei metadati
          della versione.
          I negozi rifiuteranno immagini sfocate, di bassa qualità o se
          contengono URL, indirizzi e-mail, numeri di telefono,
          codici a barre, prezzi o loghi di marchi registrati.
          Inoltre, la copertina non deve contenere materiale esplicito
          o offensivo, come pornografia o discorsi di odio. Qualsiasi
          design che non rispetti i requisiti dei negozi sarà respinto.`,
        addUrlSpotify: "Inserisci l'URL del tuo profilo Spotify",
        addUrlAppleMusic: "Inserisci l'URL del tuo profilo Apple Music",
        addRecordLabel: "Inserisci l'etichetta discografica",
        addTypeLaunch: {
          label: "Seleziona uno",
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
        dateLaunch: "Data di Uscita:",
        timeLaunch: "Ora di Uscita:",
        recordLabel: "Etichetta Discografica:",
        urlSpotify: "URL di Spotify:",
        urlAppleMusic: "URL di Apple Music:",
        codeUPC: "Codice UPC:",
        noMusic: "Nessuna musica aggiunta",
        typeMusic: "Tipo:",
      },
    },
  },
  fr: {
    translation: {
      header: {
        music: "Musique",
        artist: "Artistes",
        reports: "Rapports",
        support: "Support",
        account: "Mon Compte",
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
        title: ["Ma", "Musique"],
        subtitle: [
          "Prêt à partager votre musique ?",
          "Nous avons ce qu'il vous faut. Sélectionnez simplement un type de version pour commencer :",
        ],
        titleReleaseCreate: "Créer une Version",
        buttonReleaseCreate: "Créer Nouveau",
        titleSectionRelease: ["Mes", "Versions"],
        typeCard: "par : ",
        butonAddMusics: "Éditer les musiques",
        noReleases: "Aucune version disponible",
      },
      createRelease: {
        title: "Créer une version",
        subtitlePrimary: "Informations",
        subtitleSecondary: "Couverture",
        subtitleTertiary: "Informations additionnelles",
        titleRelease: "Titre de l'album, de l'EP ou du single",
        addArtist: "Entrez l'artiste",
        addGenres: "Entrez le genre",
        addDate: "Entrez la date de sortie",
        addTime: "Entrez l'heure de sortie",
        messageImage: `Votre couverture doit être:
          Taille : 3000 - 3000 pixels (en format carré) Format :
          JPG, TIFF ou PNG (max 36 Mo ; mode RVB) Vous devez être le propriétaire
          des droits de conception et de chaque image ou élément visuel
          qu'elle contient. Les informations de conception doivent être
          cohérentes avec toutes les informations saisies dans les métadonnées
          de la version.
          Les magasins refuseront les images floues, de mauvaise qualité ou si
          elles contiennent une URL, une adresse e-mail, un numéro de téléphone,
          des codes-barres, des prix ou des logos de marques déposées.
          De plus, la couverture ne doit contenir aucun contenu explicite
          ou offensant, tel que de la pornographie ou des discours haineux.
          Tout design qui ne respecte pas les exigences des magasins sera rejeté.`,
        addUrlSpotify: "Entrez l'URL de votre profil Spotify",
        addUrlAppleMusic: "Entrez l'URL de votre profil Apple Music",
        addRecordLabel: "Entrez le label discographique",
        addTypeLaunch: {
          label: "Sélectionnez un",
          optionPrimary: "Sélectionnez un",
          optionSecondary: "Single",
          optionTertiary: "EP",
          optionQuarter: "Album",
        },
        addCodeUPC: "Entrez le code UPC/EAN",
        buttonNext: "Suivant",
      },
      editRelease: {
        title: "Éditer Version",
        button: "Enregistrer",
      },
      deleteRelease: {
        alert: "Êtes-vous sûr de vouloir supprimer cette version ?",
      },
      createMusic: {
        typeRelease: "Type de la Version:",
        artist: "Artiste Principal:",
        genreRelease: "Genre de la Version:",
        dateLaunch: "Date de Sortie:",
        timeLaunch: "Heure de Sortie:",
        recordLabel: "Label Discographique:",
        urlSpotify: "URL Spotify:",
        urlAppleMusic: "URL Apple Music:",
        codeUPC: "Code UPC:",
        noMusic: "Aucune musique ajoutée",
        typeMusic: "Type:",
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
