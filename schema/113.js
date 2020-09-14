Object.defineProperty(exports, "__esModule", {value: true});

const API = 1;

exports.default = {
    "constructors": [{
        "@": API,
        "id": "-1132882121",
        "predicate": "boolFalse",
        "params": [],
        "type": "Bool"
    }, {"id": "-1720552011", "predicate": "boolTrue", "params": [], "type": "Bool"}, {
        "@": API,
        "id": "1072550713",
        "predicate": "true",
        "params": [],
        "type": "True"
    }, {"id": "481674261", "predicate": "vector", "params": [], "type": "Vector t"}, {
        "@": API,
        "id": "-994444869",
        "predicate": "error",
        "params": [{"name": "code", "type": "int"}, {"name": "text", "type": "string"}],
        "type": "Error"
    }, {"id": "1450380236", "predicate": "null", "params": [], "type": "Null"}, {
        "@": API,
        "id": "2134579434",
        "predicate": "inputPeerEmpty",
        "params": [],
        "type": "InputPeer"
    }, {"id": "2107670217", "predicate": "inputPeerSelf", "params": [], "type": "InputPeer"}, {
        "@": API,
        "id": "396093539",
        "predicate": "inputPeerChat",
        "params": [{"name": "chat_id", "type": "int"}],
        "type": "InputPeer"
    }, {"id": "-1182234929", "predicate": "inputUserEmpty", "params": [], "type": "InputUser"}, {
        "@": API,
        "id": "-138301121",
        "predicate": "inputUserSelf",
        "params": [],
        "type": "InputUser"
    }, {
        "@": API,
        "id": "-208488460",
        "predicate": "inputPhoneContact",
        "params": [{"name": "client_id", "type": "long"}, {"name": "phone", "type": "string"}, {
            "name": "first_name",
            "type": "string"
        }, {"name": "last_name", "type": "string"}],
        "type": "InputContact"
    }, {
        "@": API,
        "id": "-181407105",
        "predicate": "inputFile",
        "params": [{"name": "id", "type": "long"}, {"name": "parts", "type": "int"}, {
            "name": "name",
            "type": "string"
        }, {"name": "md5_checksum", "type": "string"}],
        "type": "InputFile"
    }, {"id": "-1771768449", "predicate": "inputMediaEmpty", "params": [], "type": "InputMedia"}, {
        "@": API,
        "id": "505969924",
        "predicate": "inputMediaUploadedPhoto",
        "params": [{"name": "flags", "type": "#"}, {"name": "file", "type": "InputFile"}, {
            "name": "stickers",
            "type": "flags.0?Vector<InputDocument>"
        }, {"name": "ttl_seconds", "type": "flags.1?int"}],
        "type": "InputMedia"
    }, {
        "@": API,
        "id": "-1279654347",
        "predicate": "inputMediaPhoto",
        "params": [{"name": "flags", "type": "#"}, {"name": "id", "type": "InputPhoto"}, {
            "name": "ttl_seconds",
            "type": "flags.0?int"
        }],
        "type": "InputMedia"
    }, {
        "@": API,
        "id": "-104578748",
        "predicate": "inputMediaGeoPoint",
        "params": [{"name": "geo_point", "type": "InputGeoPoint"}],
        "type": "InputMedia"
    }, {
        "@": API,
        "id": "-122978821",
        "predicate": "inputMediaContact",
        "params": [{"name": "phone_number", "type": "string"}, {
            "name": "first_name",
            "type": "string"
        }, {"name": "last_name", "type": "string"}, {"name": "vcard", "type": "string"}],
        "type": "InputMedia"
    }, {
        "@": API,
        "id": "480546647",
        "predicate": "inputChatPhotoEmpty",
        "params": [],
        "type": "InputChatPhoto"
    }, {
        "@": API,
        "id": "-1837345356",
        "predicate": "inputChatUploadedPhoto",
        "params": [{"name": "file", "type": "InputFile"}],
        "type": "InputChatPhoto"
    }, {
        "@": API,
        "id": "-1991004873",
        "predicate": "inputChatPhoto",
        "params": [{"name": "id", "type": "InputPhoto"}],
        "type": "InputChatPhoto"
    }, {
        "@": API,
        "id": "-457104426",
        "predicate": "inputGeoPointEmpty",
        "params": [],
        "type": "InputGeoPoint"
    }, {
        "@": API,
        "id": "-206066487",
        "predicate": "inputGeoPoint",
        "params": [{"name": "lat", "type": "double"}, {"name": "long", "type": "double"}],
        "type": "InputGeoPoint"
    }, {"id": "483901197", "predicate": "inputPhotoEmpty", "params": [], "type": "InputPhoto"}, {
        "@": API,
        "id": "1001634122",
        "predicate": "inputPhoto",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}, {
            "name": "file_reference",
            "type": "bytes"
        }],
        "type": "InputPhoto"
    }, {
        "@": API,
        "id": "-539317279",
        "predicate": "inputFileLocation",
        "params": [{"name": "volume_id", "type": "long"}, {"name": "local_id", "type": "int"}, {
            "name": "secret",
            "type": "long"
        }, {"name": "file_reference", "type": "bytes"}],
        "type": "InputFileLocation"
    }, {
        "@": API,
        "id": "-1649296275",
        "predicate": "peerUser",
        "params": [{"name": "user_id", "type": "int"}],
        "type": "Peer"
    }, {
        "@": API,
        "id": "-1160714821",
        "predicate": "peerChat",
        "params": [{"name": "chat_id", "type": "int"}],
        "type": "Peer"
    }, {
        "@": API,
        "id": "-1432995067",
        "predicate": "storage.fileUnknown",
        "params": [],
        "type": "storage.FileType"
    }, {
        "@": API,
        "id": "1086091090",
        "predicate": "storage.filePartial",
        "params": [],
        "type": "storage.FileType"
    }, {
        "@": API,
        "id": "8322574",
        "predicate": "storage.fileJpeg",
        "params": [],
        "type": "storage.FileType"
    }, {
        "@": API,
        "id": "-891180321",
        "predicate": "storage.fileGif",
        "params": [],
        "type": "storage.FileType"
    }, {
        "@": API,
        "id": "172975040",
        "predicate": "storage.filePng",
        "params": [],
        "type": "storage.FileType"
    }, {
        "@": API,
        "id": "-1373745011",
        "predicate": "storage.filePdf",
        "params": [],
        "type": "storage.FileType"
    }, {
        "@": API,
        "id": "1384777335",
        "predicate": "storage.fileMp3",
        "params": [],
        "type": "storage.FileType"
    }, {
        "@": API,
        "id": "1258941372",
        "predicate": "storage.fileMov",
        "params": [],
        "type": "storage.FileType"
    }, {
        "@": API,
        "id": "-1278304028",
        "predicate": "storage.fileMp4",
        "params": [],
        "type": "storage.FileType"
    }, {
        "@": API,
        "id": "276907596",
        "predicate": "storage.fileWebp",
        "params": [],
        "type": "storage.FileType"
    }, {
        "@": API,
        "id": "537022650",
        "predicate": "userEmpty",
        "params": [{"name": "id", "type": "int"}],
        "type": "User"
    }, {
        "@": API,
        "id": "1326562017",
        "predicate": "userProfilePhotoEmpty",
        "params": [],
        "type": "UserProfilePhoto"
    }, {
        "@": API,
        "id": "-321430132",
        "predicate": "userProfilePhoto",
        "params": [{"name": "photo_id", "type": "long"}, {
            "name": "photo_small",
            "type": "FileLocation"
        }, {"name": "photo_big", "type": "FileLocation"}, {"name": "dc_id", "type": "int"}],
        "type": "UserProfilePhoto"
    }, {"id": "164646985", "predicate": "userStatusEmpty", "params": [], "type": "UserStatus"}, {
        "@": API,
        "id": "-306628279",
        "predicate": "userStatusOnline",
        "params": [{"name": "expires", "type": "int"}],
        "type": "UserStatus"
    }, {
        "@": API,
        "id": "9203775",
        "predicate": "userStatusOffline",
        "params": [{"name": "was_online", "type": "int"}],
        "type": "UserStatus"
    }, {
        "@": API,
        "id": "-1683826688",
        "predicate": "chatEmpty",
        "params": [{"name": "id", "type": "int"}],
        "type": "Chat"
    }, {
        "@": API,
        "id": "1004149726",
        "predicate": "chat",
        "params": [{"name": "flags", "type": "#"}, {"name": "creator", "type": "flags.0?true"}, {
            "name": "kicked",
            "type": "flags.1?true"
        }, {"name": "left", "type": "flags.2?true"}, {"name": "deactivated", "type": "flags.5?true"}, {
            "name": "id",
            "type": "int"
        }, {"name": "title", "type": "string"}, {"name": "photo", "type": "ChatPhoto"}, {
            "name": "participants_count",
            "type": "int"
        }, {"name": "date", "type": "int"}, {"name": "version", "type": "int"}, {
            "name": "migrated_to",
            "type": "flags.6?InputChannel"
        }, {"name": "admin_rights", "type": "flags.14?ChatAdminRights"}, {
            "name": "default_banned_rights",
            "type": "flags.18?ChatBannedRights"
        }],
        "type": "Chat"
    }, {
        "@": API,
        "id": "120753115",
        "predicate": "chatForbidden",
        "params": [{"name": "id", "type": "int"}, {"name": "title", "type": "string"}],
        "type": "Chat"
    }, {
        "@": API,
        "id": "461151667",
        "predicate": "chatFull",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "can_set_username",
            "type": "flags.7?true"
        }, {"name": "has_scheduled", "type": "flags.8?true"}, {"name": "id", "type": "int"}, {
            "name": "about",
            "type": "string"
        }, {"name": "participants", "type": "ChatParticipants"}, {
            "name": "chat_photo",
            "type": "flags.2?Photo"
        }, {"name": "notify_settings", "type": "PeerNotifySettings"}, {
            "name": "exported_invite",
            "type": "ExportedChatInvite"
        }, {"name": "bot_info", "type": "flags.3?Vector<BotInfo>"}, {
            "name": "pinned_msg_id",
            "type": "flags.6?int"
        }, {"name": "folder_id", "type": "flags.11?int"}],
        "type": "ChatFull"
    }, {
        "@": API,
        "id": "-925415106",
        "predicate": "chatParticipant",
        "params": [{"name": "user_id", "type": "int"}, {"name": "inviter_id", "type": "int"}, {
            "name": "date",
            "type": "int"
        }],
        "type": "ChatParticipant"
    }, {
        "@": API,
        "id": "-57668565",
        "predicate": "chatParticipantsForbidden",
        "params": [{"name": "flags", "type": "#"}, {"name": "chat_id", "type": "int"}, {
            "name": "self_participant",
            "type": "flags.0?ChatParticipant"
        }],
        "type": "ChatParticipants"
    }, {
        "@": API,
        "id": "1061556205",
        "predicate": "chatParticipants",
        "params": [{"name": "chat_id", "type": "int"}, {
            "name": "participants",
            "type": "Vector<ChatParticipant>"
        }, {"name": "version", "type": "int"}],
        "type": "ChatParticipants"
    }, {"id": "935395612", "predicate": "chatPhotoEmpty", "params": [], "type": "ChatPhoto"}, {
        "@": API,
        "id": "1197267925",
        "predicate": "chatPhoto",
        "params": [{"name": "photo_small", "type": "FileLocation"}, {
            "name": "photo_big",
            "type": "FileLocation"
        }, {"name": "dc_id", "type": "int"}],
        "type": "ChatPhoto"
    }, {
        "@": API,
        "id": "-2082087340",
        "predicate": "messageEmpty",
        "params": [{"name": "id", "type": "int"}],
        "type": "Message"
    }, {
        "@": API,
        "id": "1160515173",
        "predicate": "message",
        "params": [{"name": "flags", "type": "#"}, {"name": "out", "type": "flags.1?true"}, {
            "name": "mentioned",
            "type": "flags.4?true"
        }, {"name": "media_unread", "type": "flags.5?true"}, {
            "name": "silent",
            "type": "flags.13?true"
        }, {"name": "post", "type": "flags.14?true"}, {
            "name": "from_scheduled",
            "type": "flags.18?true"
        }, {"name": "legacy", "type": "flags.19?true"}, {"name": "edit_hide", "type": "flags.21?true"}, {
            "name": "id",
            "type": "int"
        }, {"name": "from_id", "type": "flags.8?int"}, {"name": "to_id", "type": "Peer"}, {
            "name": "fwd_from",
            "type": "flags.2?MessageFwdHeader"
        }, {"name": "via_bot_id", "type": "flags.11?int"}, {
            "name": "reply_to_msg_id",
            "type": "flags.3?int"
        }, {"name": "date", "type": "int"}, {"name": "message", "type": "string"}, {
            "name": "media",
            "type": "flags.9?MessageMedia"
        }, {"name": "reply_markup", "type": "flags.6?ReplyMarkup"}, {
            "name": "entities",
            "type": "flags.7?Vector<MessageEntity>"
        }, {"name": "views", "type": "flags.10?int"}, {
            "name": "edit_date",
            "type": "flags.15?int"
        }, {"name": "post_author", "type": "flags.16?string"}, {
            "name": "grouped_id",
            "type": "flags.17?long"
        }, {"name": "restriction_reason", "type": "flags.22?Vector<RestrictionReason>"}],
        "type": "Message"
    }, {
        "@": API,
        "id": "-1642487306",
        "predicate": "messageService",
        "params": [{"name": "flags", "type": "#"}, {"name": "out", "type": "flags.1?true"}, {
            "name": "mentioned",
            "type": "flags.4?true"
        }, {"name": "media_unread", "type": "flags.5?true"}, {
            "name": "silent",
            "type": "flags.13?true"
        }, {"name": "post", "type": "flags.14?true"}, {"name": "legacy", "type": "flags.19?true"}, {
            "name": "id",
            "type": "int"
        }, {"name": "from_id", "type": "flags.8?int"}, {"name": "to_id", "type": "Peer"}, {
            "name": "reply_to_msg_id",
            "type": "flags.3?int"
        }, {"name": "date", "type": "int"}, {"name": "action", "type": "MessageAction"}],
        "type": "Message"
    }, {
        "@": API,
        "id": "1038967584",
        "predicate": "messageMediaEmpty",
        "params": [],
        "type": "MessageMedia"
    }, {
        "@": API,
        "id": "1766936791",
        "predicate": "messageMediaPhoto",
        "params": [{"name": "flags", "type": "#"}, {"name": "photo", "type": "flags.0?Photo"}, {
            "name": "ttl_seconds",
            "type": "flags.2?int"
        }],
        "type": "MessageMedia"
    }, {
        "@": API,
        "id": "1457575028",
        "predicate": "messageMediaGeo",
        "params": [{"name": "geo", "type": "GeoPoint"}],
        "type": "MessageMedia"
    }, {
        "@": API,
        "id": "-873313984",
        "predicate": "messageMediaContact",
        "params": [{"name": "phone_number", "type": "string"}, {
            "name": "first_name",
            "type": "string"
        }, {"name": "last_name", "type": "string"}, {"name": "vcard", "type": "string"}, {
            "name": "user_id",
            "type": "int"
        }],
        "type": "MessageMedia"
    }, {
        "@": API,
        "id": "-1618676578",
        "predicate": "messageMediaUnsupported",
        "params": [],
        "type": "MessageMedia"
    }, {
        "@": API,
        "id": "-1230047312",
        "predicate": "messageActionEmpty",
        "params": [],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "-1503425638",
        "predicate": "messageActionChatCreate",
        "params": [{"name": "title", "type": "string"}, {"name": "users", "type": "Vector<int>"}],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "-1247687078",
        "predicate": "messageActionChatEditTitle",
        "params": [{"name": "title", "type": "string"}],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "2144015272",
        "predicate": "messageActionChatEditPhoto",
        "params": [{"name": "photo", "type": "Photo"}],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "-1780220945",
        "predicate": "messageActionChatDeletePhoto",
        "params": [],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "1217033015",
        "predicate": "messageActionChatAddUser",
        "params": [{"name": "users", "type": "Vector<int>"}],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "-1297179892",
        "predicate": "messageActionChatDeleteUser",
        "params": [{"name": "user_id", "type": "int"}],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "739712882",
        "predicate": "dialog",
        "params": [{"name": "flags", "type": "#"}, {"name": "pinned", "type": "flags.2?true"}, {
            "name": "unread_mark",
            "type": "flags.3?true"
        }, {"name": "peer", "type": "Peer"}, {"name": "top_message", "type": "int"}, {
            "name": "read_inbox_max_id",
            "type": "int"
        }, {"name": "read_outbox_max_id", "type": "int"}, {
            "name": "unread_count",
            "type": "int"
        }, {"name": "unread_mentions_count", "type": "int"}, {
            "name": "notify_settings",
            "type": "PeerNotifySettings"
        }, {"name": "pts", "type": "flags.0?int"}, {
            "name": "draft",
            "type": "flags.1?DraftMessage"
        }, {"name": "folder_id", "type": "flags.4?int"}],
        "type": "Dialog"
    }, {
        "@": API,
        "id": "590459437",
        "predicate": "photoEmpty",
        "params": [{"name": "id", "type": "long"}],
        "type": "Photo"
    }, {
        "@": API,
        "id": "-797637467",
        "predicate": "photo",
        "params": [{"name": "flags", "type": "#"}, {"name": "has_stickers", "type": "flags.0?true"}, {
            "name": "id",
            "type": "long"
        }, {"name": "access_hash", "type": "long"}, {"name": "file_reference", "type": "bytes"}, {
            "name": "date",
            "type": "int"
        }, {"name": "sizes", "type": "Vector<PhotoSize>"}, {"name": "dc_id", "type": "int"}],
        "type": "Photo"
    }, {
        "@": API,
        "id": "236446268",
        "predicate": "photoSizeEmpty",
        "params": [{"name": "type", "type": "string"}],
        "type": "PhotoSize"
    }, {
        "@": API,
        "id": "2009052699",
        "predicate": "photoSize",
        "params": [{"name": "type", "type": "string"}, {"name": "location", "type": "FileLocation"}, {
            "name": "w",
            "type": "int"
        }, {"name": "h", "type": "int"}, {"name": "size", "type": "int"}],
        "type": "PhotoSize"
    }, {
        "@": API,
        "id": "-374917894",
        "predicate": "photoCachedSize",
        "params": [{"name": "type", "type": "string"}, {"name": "location", "type": "FileLocation"}, {
            "name": "w",
            "type": "int"
        }, {"name": "h", "type": "int"}, {"name": "bytes", "type": "bytes"}],
        "type": "PhotoSize"
    }, {"id": "286776671", "predicate": "geoPointEmpty", "params": [], "type": "GeoPoint"}, {
        "@": API,
        "id": "43446532",
        "predicate": "geoPoint",
        "params": [{"name": "long", "type": "double"}, {"name": "lat", "type": "double"}, {
            "name": "access_hash",
            "type": "long"
        }],
        "type": "GeoPoint"
    }, {
        "@": API,
        "id": "1577067778",
        "predicate": "auth.sentCode",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "type",
            "type": "auth.SentCodeType"
        }, {"name": "phone_code_hash", "type": "string"}, {
            "name": "next_type",
            "type": "flags.1?auth.CodeType"
        }, {"name": "timeout", "type": "flags.2?int"}],
        "type": "auth.SentCode"
    }, {
        "@": API,
        "id": "-855308010",
        "predicate": "auth.authorization",
        "params": [{"name": "flags", "type": "#"}, {"name": "tmp_sessions", "type": "flags.0?int"}, {
            "name": "user",
            "type": "User"
        }],
        "type": "auth.Authorization"
    }, {
        "@": API,
        "id": "-543777747",
        "predicate": "auth.exportedAuthorization",
        "params": [{"name": "id", "type": "int"}, {"name": "bytes", "type": "bytes"}],
        "type": "auth.ExportedAuthorization"
    }, {
        "@": API,
        "id": "-1195615476",
        "predicate": "inputNotifyPeer",
        "params": [{"name": "peer", "type": "InputPeer"}],
        "type": "InputNotifyPeer"
    }, {
        "@": API,
        "id": "423314455",
        "predicate": "inputNotifyUsers",
        "params": [],
        "type": "InputNotifyPeer"
    }, {
        "@": API,
        "id": "1251338318",
        "predicate": "inputNotifyChats",
        "params": [],
        "type": "InputNotifyPeer"
    }, {
        "@": API,
        "id": "-1673717362",
        "predicate": "inputPeerNotifySettings",
        "params": [{"name": "flags", "type": "#"}, {"name": "show_previews", "type": "flags.0?Bool"}, {
            "name": "silent",
            "type": "flags.1?Bool"
        }, {"name": "mute_until", "type": "flags.2?int"}, {"name": "sound", "type": "flags.3?string"}],
        "type": "InputPeerNotifySettings"
    }, {
        "@": API,
        "id": "-1353671392",
        "predicate": "peerNotifySettings",
        "params": [{"name": "flags", "type": "#"}, {"name": "show_previews", "type": "flags.0?Bool"}, {
            "name": "silent",
            "type": "flags.1?Bool"
        }, {"name": "mute_until", "type": "flags.2?int"}, {"name": "sound", "type": "flags.3?string"}],
        "type": "PeerNotifySettings"
    }, {
        "@": API,
        "id": "-2122045747",
        "predicate": "peerSettings",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "report_spam",
            "type": "flags.0?true"
        }, {"name": "add_contact", "type": "flags.1?true"}, {
            "name": "block_contact",
            "type": "flags.2?true"
        }, {"name": "share_contact", "type": "flags.3?true"}, {
            "name": "need_contacts_exception",
            "type": "flags.4?true"
        }, {"name": "report_geo", "type": "flags.5?true"}],
        "type": "PeerSettings"
    }, {
        "@": API,
        "id": "-1539849235",
        "predicate": "wallPaper",
        "params": [{"name": "id", "type": "long"}, {"name": "flags", "type": "#"}, {
            "name": "creator",
            "type": "flags.0?true"
        }, {"name": "default", "type": "flags.1?true"}, {"name": "pattern", "type": "flags.3?true"}, {
            "name": "dark",
            "type": "flags.4?true"
        }, {"name": "access_hash", "type": "long"}, {"name": "slug", "type": "string"}, {
            "name": "document",
            "type": "Document"
        }, {"name": "settings", "type": "flags.2?WallPaperSettings"}],
        "type": "WallPaper"
    }, {
        "@": API,
        "id": "1490799288",
        "predicate": "inputReportReasonSpam",
        "params": [],
        "type": "ReportReason"
    }, {
        "@": API,
        "id": "505595789",
        "predicate": "inputReportReasonViolence",
        "params": [],
        "type": "ReportReason"
    }, {
        "@": API,
        "id": "777640226",
        "predicate": "inputReportReasonPornography",
        "params": [],
        "type": "ReportReason"
    }, {
        "@": API,
        "id": "-1376497949",
        "predicate": "inputReportReasonChildAbuse",
        "params": [],
        "type": "ReportReason"
    }, {
        "@": API,
        "id": "-512463606",
        "predicate": "inputReportReasonOther",
        "params": [{"name": "text", "type": "string"}],
        "type": "ReportReason"
    }, {
        "@": API,
        "id": "-302941166",
        "predicate": "userFull",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "blocked",
            "type": "flags.0?true"
        }, {"name": "phone_calls_available", "type": "flags.4?true"}, {
            "name": "phone_calls_private",
            "type": "flags.5?true"
        }, {"name": "can_pin_message", "type": "flags.7?true"}, {
            "name": "has_scheduled",
            "type": "flags.12?true"
        }, {"name": "video_calls_available", "type": "flags.13?true"}, {
            "name": "user",
            "type": "User"
        }, {"name": "about", "type": "flags.1?string"}, {
            "name": "settings",
            "type": "PeerSettings"
        }, {"name": "profile_photo", "type": "flags.2?Photo"}, {
            "name": "notify_settings",
            "type": "PeerNotifySettings"
        }, {"name": "bot_info", "type": "flags.3?BotInfo"}, {
            "name": "pinned_msg_id",
            "type": "flags.6?int"
        }, {"name": "common_chats_count", "type": "int"}, {"name": "folder_id", "type": "flags.11?int"}],
        "type": "UserFull"
    }, {
        "@": API,
        "id": "-116274796",
        "predicate": "contact",
        "params": [{"name": "user_id", "type": "int"}, {"name": "mutual", "type": "Bool"}],
        "type": "Contact"
    }, {
        "@": API,
        "id": "-805141448",
        "predicate": "importedContact",
        "params": [{"name": "user_id", "type": "int"}, {"name": "client_id", "type": "long"}],
        "type": "ImportedContact"
    }, {
        "@": API,
        "id": "1444661369",
        "predicate": "contactBlocked",
        "params": [{"name": "user_id", "type": "int"}, {"name": "date", "type": "int"}],
        "type": "ContactBlocked"
    }, {
        "@": API,
        "id": "-748155807",
        "predicate": "contactStatus",
        "params": [{"name": "user_id", "type": "int"}, {"name": "status", "type": "UserStatus"}],
        "type": "ContactStatus"
    }, {
        "@": API,
        "id": "-1219778094",
        "predicate": "contacts.contactsNotModified",
        "params": [],
        "type": "contacts.Contacts"
    }, {
        "@": API,
        "id": "-353862078",
        "predicate": "contacts.contacts",
        "params": [{"name": "contacts", "type": "Vector<Contact>"}, {
            "name": "saved_count",
            "type": "int"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "contacts.Contacts"
    }, {
        "@": API,
        "id": "2010127419",
        "predicate": "contacts.importedContacts",
        "params": [{"name": "imported", "type": "Vector<ImportedContact>"}, {
            "name": "popular_invites",
            "type": "Vector<PopularContact>"
        }, {"name": "retry_contacts", "type": "Vector<long>"}, {"name": "users", "type": "Vector<User>"}],
        "type": "contacts.ImportedContacts"
    }, {
        "@": API,
        "id": "471043349",
        "predicate": "contacts.blocked",
        "params": [{"name": "blocked", "type": "Vector<ContactBlocked>"}, {"name": "users", "type": "Vector<User>"}],
        "type": "contacts.Blocked"
    }, {
        "@": API,
        "id": "-1878523231",
        "predicate": "contacts.blockedSlice",
        "params": [{"name": "count", "type": "int"}, {
            "name": "blocked",
            "type": "Vector<ContactBlocked>"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "contacts.Blocked"
    }, {
        "@": API,
        "id": "364538944",
        "predicate": "messages.dialogs",
        "params": [{"name": "dialogs", "type": "Vector<Dialog>"}, {
            "name": "messages",
            "type": "Vector<Message>"
        }, {"name": "chats", "type": "Vector<Chat>"}, {"name": "users", "type": "Vector<User>"}],
        "type": "messages.Dialogs"
    }, {
        "@": API,
        "id": "1910543603",
        "predicate": "messages.dialogsSlice",
        "params": [{"name": "count", "type": "int"}, {"name": "dialogs", "type": "Vector<Dialog>"}, {
            "name": "messages",
            "type": "Vector<Message>"
        }, {"name": "chats", "type": "Vector<Chat>"}, {"name": "users", "type": "Vector<User>"}],
        "type": "messages.Dialogs"
    }, {
        "@": API,
        "id": "-1938715001",
        "predicate": "messages.messages",
        "params": [{"name": "messages", "type": "Vector<Message>"}, {
            "name": "chats",
            "type": "Vector<Chat>"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "messages.Messages"
    }, {
        "@": API,
        "id": "-923939298",
        "predicate": "messages.messagesSlice",
        "params": [{"name": "flags", "type": "#"}, {"name": "inexact", "type": "flags.1?true"}, {
            "name": "count",
            "type": "int"
        }, {"name": "next_rate", "type": "flags.0?int"}, {
            "name": "messages",
            "type": "Vector<Message>"
        }, {"name": "chats", "type": "Vector<Chat>"}, {"name": "users", "type": "Vector<User>"}],
        "type": "messages.Messages"
    }, {
        "@": API,
        "id": "1694474197",
        "predicate": "messages.chats",
        "params": [{"name": "chats", "type": "Vector<Chat>"}],
        "type": "messages.Chats"
    }, {
        "@": API,
        "id": "-438840932",
        "predicate": "messages.chatFull",
        "params": [{"name": "full_chat", "type": "ChatFull"}, {
            "name": "chats",
            "type": "Vector<Chat>"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "messages.ChatFull"
    }, {
        "@": API,
        "id": "-1269012015",
        "predicate": "messages.affectedHistory",
        "params": [{"name": "pts", "type": "int"}, {"name": "pts_count", "type": "int"}, {
            "name": "offset",
            "type": "int"
        }],
        "type": "messages.AffectedHistory"
    }, {
        "@": API,
        "id": "1474492012",
        "predicate": "inputMessagesFilterEmpty",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "@": API,
        "id": "-1777752804",
        "predicate": "inputMessagesFilterPhotos",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "@": API,
        "id": "-1614803355",
        "predicate": "inputMessagesFilterVideo",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "@": API,
        "id": "1458172132",
        "predicate": "inputMessagesFilterPhotoVideo",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "@": API,
        "id": "-1629621880",
        "predicate": "inputMessagesFilterDocument",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "@": API,
        "id": "2129714567",
        "predicate": "inputMessagesFilterUrl",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "@": API,
        "id": "-3644025",
        "predicate": "inputMessagesFilterGif",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "@": API,
        "id": "522914557",
        "predicate": "updateNewMessage",
        "params": [{"name": "message", "type": "Message"}, {"name": "pts", "type": "int"}, {
            "name": "pts_count",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "1318109142",
        "predicate": "updateMessageID",
        "params": [{"name": "id", "type": "int"}, {"name": "random_id", "type": "long"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1576161051",
        "predicate": "updateDeleteMessages",
        "params": [{"name": "messages", "type": "Vector<int>"}, {"name": "pts", "type": "int"}, {
            "name": "pts_count",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "1548249383",
        "predicate": "updateUserTyping",
        "params": [{"name": "user_id", "type": "int"}, {"name": "action", "type": "SendMessageAction"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1704596961",
        "predicate": "updateChatUserTyping",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "user_id", "type": "int"}, {
            "name": "action",
            "type": "SendMessageAction"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "125178264",
        "predicate": "updateChatParticipants",
        "params": [{"name": "participants", "type": "ChatParticipants"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "469489699",
        "predicate": "updateUserStatus",
        "params": [{"name": "user_id", "type": "int"}, {"name": "status", "type": "UserStatus"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1489818765",
        "predicate": "updateUserName",
        "params": [{"name": "user_id", "type": "int"}, {"name": "first_name", "type": "string"}, {
            "name": "last_name",
            "type": "string"
        }, {"name": "username", "type": "string"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1791935732",
        "predicate": "updateUserPhoto",
        "params": [{"name": "user_id", "type": "int"}, {"name": "date", "type": "int"}, {
            "name": "photo",
            "type": "UserProfilePhoto"
        }, {"name": "previous", "type": "Bool"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1519637954",
        "predicate": "updates.state",
        "params": [{"name": "pts", "type": "int"}, {"name": "qts", "type": "int"}, {
            "name": "date",
            "type": "int"
        }, {"name": "seq", "type": "int"}, {"name": "unread_count", "type": "int"}],
        "type": "updates.State"
    }, {
        "@": API,
        "id": "1567990072",
        "predicate": "updates.differenceEmpty",
        "params": [{"name": "date", "type": "int"}, {"name": "seq", "type": "int"}],
        "type": "updates.Difference"
    }, {
        "@": API,
        "id": "16030880",
        "predicate": "updates.difference",
        "params": [{"name": "new_messages", "type": "Vector<Message>"}, {
            "name": "new_encrypted_messages",
            "type": "Vector<EncryptedMessage>"
        }, {"name": "other_updates", "type": "Vector<Update>"}, {
            "name": "chats",
            "type": "Vector<Chat>"
        }, {"name": "users", "type": "Vector<User>"}, {"name": "state", "type": "updates.State"}],
        "type": "updates.Difference"
    }, {
        "@": API,
        "id": "-1459938943",
        "predicate": "updates.differenceSlice",
        "params": [{"name": "new_messages", "type": "Vector<Message>"}, {
            "name": "new_encrypted_messages",
            "type": "Vector<EncryptedMessage>"
        }, {"name": "other_updates", "type": "Vector<Update>"}, {
            "name": "chats",
            "type": "Vector<Chat>"
        }, {"name": "users", "type": "Vector<User>"}, {"name": "intermediate_state", "type": "updates.State"}],
        "type": "updates.Difference"
    }, {"id": "-484987010", "predicate": "updatesTooLong", "params": [], "type": "Updates"}, {
        "@": API,
        "id": "-1857044719",
        "predicate": "updateShortMessage",
        "params": [{"name": "flags", "type": "#"}, {"name": "out", "type": "flags.1?true"}, {
            "name": "mentioned",
            "type": "flags.4?true"
        }, {"name": "media_unread", "type": "flags.5?true"}, {"name": "silent", "type": "flags.13?true"}, {
            "name": "id",
            "type": "int"
        }, {"name": "user_id", "type": "int"}, {"name": "message", "type": "string"}, {
            "name": "pts",
            "type": "int"
        }, {"name": "pts_count", "type": "int"}, {"name": "date", "type": "int"}, {
            "name": "fwd_from",
            "type": "flags.2?MessageFwdHeader"
        }, {"name": "via_bot_id", "type": "flags.11?int"}, {
            "name": "reply_to_msg_id",
            "type": "flags.3?int"
        }, {"name": "entities", "type": "flags.7?Vector<MessageEntity>"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "377562760",
        "predicate": "updateShortChatMessage",
        "params": [{"name": "flags", "type": "#"}, {"name": "out", "type": "flags.1?true"}, {
            "name": "mentioned",
            "type": "flags.4?true"
        }, {"name": "media_unread", "type": "flags.5?true"}, {"name": "silent", "type": "flags.13?true"}, {
            "name": "id",
            "type": "int"
        }, {"name": "from_id", "type": "int"}, {"name": "chat_id", "type": "int"}, {
            "name": "message",
            "type": "string"
        }, {"name": "pts", "type": "int"}, {"name": "pts_count", "type": "int"}, {
            "name": "date",
            "type": "int"
        }, {"name": "fwd_from", "type": "flags.2?MessageFwdHeader"}, {
            "name": "via_bot_id",
            "type": "flags.11?int"
        }, {"name": "reply_to_msg_id", "type": "flags.3?int"}, {
            "name": "entities",
            "type": "flags.7?Vector<MessageEntity>"
        }],
        "type": "Updates"
    }, {
        "@": API,
        "id": "2027216577",
        "predicate": "updateShort",
        "params": [{"name": "update", "type": "Update"}, {"name": "date", "type": "int"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "1918567619",
        "predicate": "updatesCombined",
        "params": [{"name": "updates", "type": "Vector<Update>"}, {
            "name": "users",
            "type": "Vector<User>"
        }, {"name": "chats", "type": "Vector<Chat>"}, {"name": "date", "type": "int"}, {
            "name": "seq_start",
            "type": "int"
        }, {"name": "seq", "type": "int"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "1957577280",
        "predicate": "updates",
        "params": [{"name": "updates", "type": "Vector<Update>"}, {
            "name": "users",
            "type": "Vector<User>"
        }, {"name": "chats", "type": "Vector<Chat>"}, {"name": "date", "type": "int"}, {"name": "seq", "type": "int"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-1916114267",
        "predicate": "photos.photos",
        "params": [{"name": "photos", "type": "Vector<Photo>"}, {"name": "users", "type": "Vector<User>"}],
        "type": "photos.Photos"
    }, {
        "@": API,
        "id": "352657236",
        "predicate": "photos.photosSlice",
        "params": [{"name": "count", "type": "int"}, {"name": "photos", "type": "Vector<Photo>"}, {
            "name": "users",
            "type": "Vector<User>"
        }],
        "type": "photos.Photos"
    }, {
        "@": API,
        "id": "539045032",
        "predicate": "photos.photo",
        "params": [{"name": "photo", "type": "Photo"}, {"name": "users", "type": "Vector<User>"}],
        "type": "photos.Photo"
    }, {
        "@": API,
        "id": "157948117",
        "predicate": "upload.file",
        "params": [{"name": "type", "type": "storage.FileType"}, {"name": "mtime", "type": "int"}, {
            "name": "bytes",
            "type": "bytes"
        }],
        "type": "upload.File"
    }, {
        "@": API,
        "id": "414687501",
        "predicate": "dcOption",
        "params": [{"name": "flags", "type": "#"}, {"name": "ipv6", "type": "flags.0?true"}, {
            "name": "media_only",
            "type": "flags.1?true"
        }, {"name": "tcpo_only", "type": "flags.2?true"}, {"name": "cdn", "type": "flags.3?true"}, {
            "name": "static",
            "type": "flags.4?true"
        }, {"name": "id", "type": "int"}, {"name": "ip_address", "type": "string"}, {
            "name": "port",
            "type": "int"
        }, {"name": "secret", "type": "flags.10?bytes"}],
        "type": "DcOption"
    }, {
        "@": API,
        "id": "856375399",
        "predicate": "config",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "phonecalls_enabled",
            "type": "flags.1?true"
        }, {"name": "default_p2p_contacts", "type": "flags.3?true"}, {
            "name": "preload_featured_stickers",
            "type": "flags.4?true"
        }, {"name": "ignore_phone_entities", "type": "flags.5?true"}, {
            "name": "revoke_pm_inbox",
            "type": "flags.6?true"
        }, {"name": "blocked_mode", "type": "flags.8?true"}, {
            "name": "pfs_enabled",
            "type": "flags.13?true"
        }, {"name": "date", "type": "int"}, {"name": "expires", "type": "int"}, {
            "name": "test_mode",
            "type": "Bool"
        }, {"name": "this_dc", "type": "int"}, {
            "name": "dc_options",
            "type": "Vector<DcOption>"
        }, {"name": "dc_txt_domain_name", "type": "string"}, {
            "name": "chat_size_max",
            "type": "int"
        }, {"name": "megagroup_size_max", "type": "int"}, {
            "name": "forwarded_count_max",
            "type": "int"
        }, {"name": "online_update_period_ms", "type": "int"}, {
            "name": "offline_blur_timeout_ms",
            "type": "int"
        }, {"name": "offline_idle_timeout_ms", "type": "int"}, {
            "name": "online_cloud_timeout_ms",
            "type": "int"
        }, {"name": "notify_cloud_delay_ms", "type": "int"}, {
            "name": "notify_default_delay_ms",
            "type": "int"
        }, {"name": "push_chat_period_ms", "type": "int"}, {
            "name": "push_chat_limit",
            "type": "int"
        }, {"name": "saved_gifs_limit", "type": "int"}, {
            "name": "edit_time_limit",
            "type": "int"
        }, {"name": "revoke_time_limit", "type": "int"}, {
            "name": "revoke_pm_time_limit",
            "type": "int"
        }, {"name": "rating_e_decay", "type": "int"}, {
            "name": "stickers_recent_limit",
            "type": "int"
        }, {"name": "stickers_faved_limit", "type": "int"}, {
            "name": "channels_read_media_period",
            "type": "int"
        }, {"name": "tmp_sessions", "type": "flags.0?int"}, {
            "name": "pinned_dialogs_count_max",
            "type": "int"
        }, {"name": "pinned_infolder_count_max", "type": "int"}, {
            "name": "call_receive_timeout_ms",
            "type": "int"
        }, {"name": "call_ring_timeout_ms", "type": "int"}, {
            "name": "call_connect_timeout_ms",
            "type": "int"
        }, {"name": "call_packet_timeout_ms", "type": "int"}, {
            "name": "me_url_prefix",
            "type": "string"
        }, {"name": "autoupdate_url_prefix", "type": "flags.7?string"}, {
            "name": "gif_search_username",
            "type": "flags.9?string"
        }, {"name": "venue_search_username", "type": "flags.10?string"}, {
            "name": "img_search_username",
            "type": "flags.11?string"
        }, {"name": "static_maps_provider", "type": "flags.12?string"}, {
            "name": "caption_length_max",
            "type": "int"
        }, {"name": "message_length_max", "type": "int"}, {
            "name": "webfile_dc_id",
            "type": "int"
        }, {"name": "suggested_lang_code", "type": "flags.2?string"}, {
            "name": "lang_pack_version",
            "type": "flags.2?int"
        }, {"name": "base_lang_pack_version", "type": "flags.2?int"}],
        "type": "Config"
    }, {
        "@": API,
        "id": "-1910892683",
        "predicate": "nearestDc",
        "params": [{"name": "country", "type": "string"}, {"name": "this_dc", "type": "int"}, {
            "name": "nearest_dc",
            "type": "int"
        }],
        "type": "NearestDc"
    }, {
        "@": API,
        "id": "497489295",
        "predicate": "help.appUpdate",
        "params": [{"name": "flags", "type": "#"}, {"name": "can_not_skip", "type": "flags.0?true"}, {
            "name": "id",
            "type": "int"
        }, {"name": "version", "type": "string"}, {"name": "text", "type": "string"}, {
            "name": "entities",
            "type": "Vector<MessageEntity>"
        }, {"name": "document", "type": "flags.1?Document"}, {"name": "url", "type": "flags.2?string"}],
        "type": "help.AppUpdate"
    }, {
        "@": API,
        "id": "-1000708810",
        "predicate": "help.noAppUpdate",
        "params": [],
        "type": "help.AppUpdate"
    }, {
        "@": API,
        "id": "415997816",
        "predicate": "help.inviteText",
        "params": [{"name": "message", "type": "string"}],
        "type": "help.InviteText"
    }, {
        "@": API,
        "id": "314359194",
        "predicate": "updateNewEncryptedMessage",
        "params": [{"name": "message", "type": "EncryptedMessage"}, {"name": "qts", "type": "int"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "386986326",
        "predicate": "updateEncryptedChatTyping",
        "params": [{"name": "chat_id", "type": "int"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1264392051",
        "predicate": "updateEncryption",
        "params": [{"name": "chat", "type": "EncryptedChat"}, {"name": "date", "type": "int"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "956179895",
        "predicate": "updateEncryptedMessagesRead",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "max_date", "type": "int"}, {
            "name": "date",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1417756512",
        "predicate": "encryptedChatEmpty",
        "params": [{"name": "id", "type": "int"}],
        "type": "EncryptedChat"
    }, {
        "@": API,
        "id": "1006044124",
        "predicate": "encryptedChatWaiting",
        "params": [{"name": "id", "type": "int"}, {"name": "access_hash", "type": "long"}, {
            "name": "date",
            "type": "int"
        }, {"name": "admin_id", "type": "int"}, {"name": "participant_id", "type": "int"}],
        "type": "EncryptedChat"
    }, {
        "@": API,
        "id": "-931638658",
        "predicate": "encryptedChatRequested",
        "params": [{"name": "id", "type": "int"}, {"name": "access_hash", "type": "long"}, {
            "name": "date",
            "type": "int"
        }, {"name": "admin_id", "type": "int"}, {"name": "participant_id", "type": "int"}, {
            "name": "g_a",
            "type": "bytes"
        }],
        "type": "EncryptedChat"
    }, {
        "@": API,
        "id": "-94974410",
        "predicate": "encryptedChat",
        "params": [{"name": "id", "type": "int"}, {"name": "access_hash", "type": "long"}, {
            "name": "date",
            "type": "int"
        }, {"name": "admin_id", "type": "int"}, {"name": "participant_id", "type": "int"}, {
            "name": "g_a_or_b",
            "type": "bytes"
        }, {"name": "key_fingerprint", "type": "long"}],
        "type": "EncryptedChat"
    }, {
        "@": API,
        "id": "332848423",
        "predicate": "encryptedChatDiscarded",
        "params": [{"name": "id", "type": "int"}],
        "type": "EncryptedChat"
    }, {
        "@": API,
        "id": "-247351839",
        "predicate": "inputEncryptedChat",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "access_hash", "type": "long"}],
        "type": "InputEncryptedChat"
    }, {
        "@": API,
        "id": "-1038136962",
        "predicate": "encryptedFileEmpty",
        "params": [],
        "type": "EncryptedFile"
    }, {
        "@": API,
        "id": "1248893260",
        "predicate": "encryptedFile",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}, {
            "name": "size",
            "type": "int"
        }, {"name": "dc_id", "type": "int"}, {"name": "key_fingerprint", "type": "int"}],
        "type": "EncryptedFile"
    }, {
        "@": API,
        "id": "406307684",
        "predicate": "inputEncryptedFileEmpty",
        "params": [],
        "type": "InputEncryptedFile"
    }, {
        "@": API,
        "id": "1690108678",
        "predicate": "inputEncryptedFileUploaded",
        "params": [{"name": "id", "type": "long"}, {"name": "parts", "type": "int"}, {
            "name": "md5_checksum",
            "type": "string"
        }, {"name": "key_fingerprint", "type": "int"}],
        "type": "InputEncryptedFile"
    }, {
        "@": API,
        "id": "1511503333",
        "predicate": "inputEncryptedFile",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}],
        "type": "InputEncryptedFile"
    }, {
        "@": API,
        "id": "-182231723",
        "predicate": "inputEncryptedFileLocation",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}],
        "type": "InputFileLocation"
    }, {
        "@": API,
        "id": "-317144808",
        "predicate": "encryptedMessage",
        "params": [{"name": "random_id", "type": "long"}, {"name": "chat_id", "type": "int"}, {
            "name": "date",
            "type": "int"
        }, {"name": "bytes", "type": "bytes"}, {"name": "file", "type": "EncryptedFile"}],
        "type": "EncryptedMessage"
    }, {
        "@": API,
        "id": "594758406",
        "predicate": "encryptedMessageService",
        "params": [{"name": "random_id", "type": "long"}, {"name": "chat_id", "type": "int"}, {
            "name": "date",
            "type": "int"
        }, {"name": "bytes", "type": "bytes"}],
        "type": "EncryptedMessage"
    }, {
        "@": API,
        "id": "-1058912715",
        "predicate": "messages.dhConfigNotModified",
        "params": [{"name": "random", "type": "bytes"}],
        "type": "messages.DhConfig"
    }, {
        "@": API,
        "id": "740433629",
        "predicate": "messages.dhConfig",
        "params": [{"name": "g", "type": "int"}, {"name": "p", "type": "bytes"}, {
            "name": "version",
            "type": "int"
        }, {"name": "random", "type": "bytes"}],
        "type": "messages.DhConfig"
    }, {
        "@": API,
        "id": "1443858741",
        "predicate": "messages.sentEncryptedMessage",
        "params": [{"name": "date", "type": "int"}],
        "type": "messages.SentEncryptedMessage"
    }, {
        "@": API,
        "id": "-1802240206",
        "predicate": "messages.sentEncryptedFile",
        "params": [{"name": "date", "type": "int"}, {"name": "file", "type": "EncryptedFile"}],
        "type": "messages.SentEncryptedMessage"
    }, {
        "@": API,
        "id": "-95482955",
        "predicate": "inputFileBig",
        "params": [{"name": "id", "type": "long"}, {"name": "parts", "type": "int"}, {
            "name": "name",
            "type": "string"
        }],
        "type": "InputFile"
    }, {
        "@": API,
        "id": "767652808",
        "predicate": "inputEncryptedFileBigUploaded",
        "params": [{"name": "id", "type": "long"}, {"name": "parts", "type": "int"}, {
            "name": "key_fingerprint",
            "type": "int"
        }],
        "type": "InputEncryptedFile"
    }, {
        "@": API,
        "id": "-364179876",
        "predicate": "updateChatParticipantAdd",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "user_id", "type": "int"}, {
            "name": "inviter_id",
            "type": "int"
        }, {"name": "date", "type": "int"}, {"name": "version", "type": "int"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "1851755554",
        "predicate": "updateChatParticipantDelete",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "user_id", "type": "int"}, {
            "name": "version",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1906403213",
        "predicate": "updateDcOptions",
        "params": [{"name": "dc_options", "type": "Vector<DcOption>"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "1530447553",
        "predicate": "inputMediaUploadedDocument",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "nosound_video",
            "type": "flags.3?true"
        }, {"name": "force_file", "type": "flags.4?true"}, {"name": "file", "type": "InputFile"}, {
            "name": "thumb",
            "type": "flags.2?InputFile"
        }, {"name": "mime_type", "type": "string"}, {
            "name": "attributes",
            "type": "Vector<DocumentAttribute>"
        }, {"name": "stickers", "type": "flags.0?Vector<InputDocument>"}, {
            "name": "ttl_seconds",
            "type": "flags.1?int"
        }],
        "type": "InputMedia"
    }, {
        "@": API,
        "id": "598418386",
        "predicate": "inputMediaDocument",
        "params": [{"name": "flags", "type": "#"}, {"name": "id", "type": "InputDocument"}, {
            "name": "ttl_seconds",
            "type": "flags.0?int"
        }],
        "type": "InputMedia"
    }, {
        "@": API,
        "id": "-1666158377",
        "predicate": "messageMediaDocument",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "document",
            "type": "flags.0?Document"
        }, {"name": "ttl_seconds", "type": "flags.2?int"}],
        "type": "MessageMedia"
    }, {
        "@": API,
        "id": "1928391342",
        "predicate": "inputDocumentEmpty",
        "params": [],
        "type": "InputDocument"
    }, {
        "@": API,
        "id": "448771445",
        "predicate": "inputDocument",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}, {
            "name": "file_reference",
            "type": "bytes"
        }],
        "type": "InputDocument"
    }, {
        "@": API,
        "id": "-1160743548",
        "predicate": "inputDocumentFileLocation",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}, {
            "name": "file_reference",
            "type": "bytes"
        }, {"name": "thumb_size", "type": "string"}],
        "type": "InputFileLocation"
    }, {
        "@": API,
        "id": "922273905",
        "predicate": "documentEmpty",
        "params": [{"name": "id", "type": "long"}],
        "type": "Document"
    }, {
        "@": API,
        "id": "-1683841855",
        "predicate": "document",
        "params": [{"name": "flags", "type": "#"}, {"name": "id", "type": "long"}, {
            "name": "access_hash",
            "type": "long"
        }, {"name": "file_reference", "type": "bytes"}, {"name": "date", "type": "int"}, {
            "name": "mime_type",
            "type": "string"
        }, {"name": "size", "type": "int"}, {"name": "thumbs", "type": "flags.0?Vector<PhotoSize>"}, {
            "name": "dc_id",
            "type": "int"
        }, {"name": "attributes", "type": "Vector<DocumentAttribute>"}],
        "type": "Document"
    }, {
        "@": API,
        "id": "398898678",
        "predicate": "help.support",
        "params": [{"name": "phone_number", "type": "string"}, {"name": "user", "type": "User"}],
        "type": "help.Support"
    }, {
        "@": API,
        "id": "-1613493288",
        "predicate": "notifyPeer",
        "params": [{"name": "peer", "type": "Peer"}],
        "type": "NotifyPeer"
    }, {"id": "-1261946036", "predicate": "notifyUsers", "params": [], "type": "NotifyPeer"}, {
        "@": API,
        "id": "-1073230141",
        "predicate": "notifyChats",
        "params": [],
        "type": "NotifyPeer"
    }, {
        "@": API,
        "id": "-2131957734",
        "predicate": "updateUserBlocked",
        "params": [{"name": "user_id", "type": "int"}, {"name": "blocked", "type": "Bool"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1094555409",
        "predicate": "updateNotifySettings",
        "params": [{"name": "peer", "type": "NotifyPeer"}, {"name": "notify_settings", "type": "PeerNotifySettings"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "381645902",
        "predicate": "sendMessageTypingAction",
        "params": [],
        "type": "SendMessageAction"
    }, {
        "@": API,
        "id": "-44119819",
        "predicate": "sendMessageCancelAction",
        "params": [],
        "type": "SendMessageAction"
    }, {
        "@": API,
        "id": "-1584933265",
        "predicate": "sendMessageRecordVideoAction",
        "params": [],
        "type": "SendMessageAction"
    }, {
        "@": API,
        "id": "-378127636",
        "predicate": "sendMessageUploadVideoAction",
        "params": [{"name": "progress", "type": "int"}],
        "type": "SendMessageAction"
    }, {
        "@": API,
        "id": "-718310409",
        "predicate": "sendMessageRecordAudioAction",
        "params": [],
        "type": "SendMessageAction"
    }, {
        "@": API,
        "id": "-212740181",
        "predicate": "sendMessageUploadAudioAction",
        "params": [{"name": "progress", "type": "int"}],
        "type": "SendMessageAction"
    }, {
        "@": API,
        "id": "-774682074",
        "predicate": "sendMessageUploadPhotoAction",
        "params": [{"name": "progress", "type": "int"}],
        "type": "SendMessageAction"
    }, {
        "@": API,
        "id": "-1441998364",
        "predicate": "sendMessageUploadDocumentAction",
        "params": [{"name": "progress", "type": "int"}],
        "type": "SendMessageAction"
    }, {
        "@": API,
        "id": "393186209",
        "predicate": "sendMessageGeoLocationAction",
        "params": [],
        "type": "SendMessageAction"
    }, {
        "@": API,
        "id": "1653390447",
        "predicate": "sendMessageChooseContactAction",
        "params": [],
        "type": "SendMessageAction"
    }, {
        "@": API,
        "id": "-1290580579",
        "predicate": "contacts.found",
        "params": [{"name": "my_results", "type": "Vector<Peer>"}, {
            "name": "results",
            "type": "Vector<Peer>"
        }, {"name": "chats", "type": "Vector<Chat>"}, {"name": "users", "type": "Vector<User>"}],
        "type": "contacts.Found"
    }, {
        "@": API,
        "id": "-337352679",
        "predicate": "updateServiceNotification",
        "params": [{"name": "flags", "type": "#"}, {"name": "popup", "type": "flags.0?true"}, {
            "name": "inbox_date",
            "type": "flags.1?int"
        }, {"name": "type", "type": "string"}, {"name": "message", "type": "string"}, {
            "name": "media",
            "type": "MessageMedia"
        }, {"name": "entities", "type": "Vector<MessageEntity>"}],
        "type": "Update"
    }, {"id": "-496024847", "predicate": "userStatusRecently", "params": [], "type": "UserStatus"}, {
        "@": API,
        "id": "129960444",
        "predicate": "userStatusLastWeek",
        "params": [],
        "type": "UserStatus"
    }, {
        "@": API,
        "id": "2011940674",
        "predicate": "userStatusLastMonth",
        "params": [],
        "type": "UserStatus"
    }, {
        "@": API,
        "id": "-298113238",
        "predicate": "updatePrivacy",
        "params": [{"name": "key", "type": "PrivacyKey"}, {"name": "rules", "type": "Vector<PrivacyRule>"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "1335282456",
        "predicate": "inputPrivacyKeyStatusTimestamp",
        "params": [],
        "type": "InputPrivacyKey"
    }, {
        "@": API,
        "id": "-1137792208",
        "predicate": "privacyKeyStatusTimestamp",
        "params": [],
        "type": "PrivacyKey"
    }, {
        "@": API,
        "id": "218751099",
        "predicate": "inputPrivacyValueAllowContacts",
        "params": [],
        "type": "InputPrivacyRule"
    }, {
        "@": API,
        "id": "407582158",
        "predicate": "inputPrivacyValueAllowAll",
        "params": [],
        "type": "InputPrivacyRule"
    }, {
        "@": API,
        "id": "320652927",
        "predicate": "inputPrivacyValueAllowUsers",
        "params": [{"name": "users", "type": "Vector<InputUser>"}],
        "type": "InputPrivacyRule"
    }, {
        "@": API,
        "id": "195371015",
        "predicate": "inputPrivacyValueDisallowContacts",
        "params": [],
        "type": "InputPrivacyRule"
    }, {
        "@": API,
        "id": "-697604407",
        "predicate": "inputPrivacyValueDisallowAll",
        "params": [],
        "type": "InputPrivacyRule"
    }, {
        "@": API,
        "id": "-1877932953",
        "predicate": "inputPrivacyValueDisallowUsers",
        "params": [{"name": "users", "type": "Vector<InputUser>"}],
        "type": "InputPrivacyRule"
    }, {
        "@": API,
        "id": "-123988",
        "predicate": "privacyValueAllowContacts",
        "params": [],
        "type": "PrivacyRule"
    }, {
        "@": API,
        "id": "1698855810",
        "predicate": "privacyValueAllowAll",
        "params": [],
        "type": "PrivacyRule"
    }, {
        "@": API,
        "id": "1297858060",
        "predicate": "privacyValueAllowUsers",
        "params": [{"name": "users", "type": "Vector<int>"}],
        "type": "PrivacyRule"
    }, {
        "@": API,
        "id": "-125240806",
        "predicate": "privacyValueDisallowContacts",
        "params": [],
        "type": "PrivacyRule"
    }, {
        "@": API,
        "id": "-1955338397",
        "predicate": "privacyValueDisallowAll",
        "params": [],
        "type": "PrivacyRule"
    }, {
        "@": API,
        "id": "209668535",
        "predicate": "privacyValueDisallowUsers",
        "params": [{"name": "users", "type": "Vector<int>"}],
        "type": "PrivacyRule"
    }, {
        "@": API,
        "id": "1352683077",
        "predicate": "account.privacyRules",
        "params": [{"name": "rules", "type": "Vector<PrivacyRule>"}, {
            "name": "chats",
            "type": "Vector<Chat>"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "account.PrivacyRules"
    }, {
        "@": API,
        "id": "-1194283041",
        "predicate": "accountDaysTTL",
        "params": [{"name": "days", "type": "int"}],
        "type": "AccountDaysTTL"
    }, {
        "@": API,
        "id": "314130811",
        "predicate": "updateUserPhone",
        "params": [{"name": "user_id", "type": "int"}, {"name": "phone", "type": "string"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "1815593308",
        "predicate": "documentAttributeImageSize",
        "params": [{"name": "w", "type": "int"}, {"name": "h", "type": "int"}],
        "type": "DocumentAttribute"
    }, {
        "@": API,
        "id": "297109817",
        "predicate": "documentAttributeAnimated",
        "params": [],
        "type": "DocumentAttribute"
    }, {
        "@": API,
        "id": "1662637586",
        "predicate": "documentAttributeSticker",
        "params": [{"name": "flags", "type": "#"}, {"name": "mask", "type": "flags.1?true"}, {
            "name": "alt",
            "type": "string"
        }, {"name": "stickerset", "type": "InputStickerSet"}, {"name": "mask_coords", "type": "flags.0?MaskCoords"}],
        "type": "DocumentAttribute"
    }, {
        "@": API,
        "id": "250621158",
        "predicate": "documentAttributeVideo",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "round_message",
            "type": "flags.0?true"
        }, {"name": "supports_streaming", "type": "flags.1?true"}, {"name": "duration", "type": "int"}, {
            "name": "w",
            "type": "int"
        }, {"name": "h", "type": "int"}],
        "type": "DocumentAttribute"
    }, {
        "@": API,
        "id": "-1739392570",
        "predicate": "documentAttributeAudio",
        "params": [{"name": "flags", "type": "#"}, {"name": "voice", "type": "flags.10?true"}, {
            "name": "duration",
            "type": "int"
        }, {"name": "title", "type": "flags.0?string"}, {
            "name": "performer",
            "type": "flags.1?string"
        }, {"name": "waveform", "type": "flags.2?bytes"}],
        "type": "DocumentAttribute"
    }, {
        "@": API,
        "id": "358154344",
        "predicate": "documentAttributeFilename",
        "params": [{"name": "file_name", "type": "string"}],
        "type": "DocumentAttribute"
    }, {
        "@": API,
        "id": "-244016606",
        "predicate": "messages.stickersNotModified",
        "params": [],
        "type": "messages.Stickers"
    }, {
        "@": API,
        "id": "-463889475",
        "predicate": "messages.stickers",
        "params": [{"name": "hash", "type": "int"}, {"name": "stickers", "type": "Vector<Document>"}],
        "type": "messages.Stickers"
    }, {
        "@": API,
        "id": "313694676",
        "predicate": "stickerPack",
        "params": [{"name": "emoticon", "type": "string"}, {"name": "documents", "type": "Vector<long>"}],
        "type": "StickerPack"
    }, {
        "@": API,
        "id": "-395967805",
        "predicate": "messages.allStickersNotModified",
        "params": [],
        "type": "messages.AllStickers"
    }, {
        "@": API,
        "id": "-302170017",
        "predicate": "messages.allStickers",
        "params": [{"name": "hash", "type": "int"}, {"name": "sets", "type": "Vector<StickerSet>"}],
        "type": "messages.AllStickers"
    }, {
        "@": API,
        "id": "-1667805217",
        "predicate": "updateReadHistoryInbox",
        "params": [{"name": "flags", "type": "#"}, {"name": "folder_id", "type": "flags.0?int"}, {
            "name": "peer",
            "type": "Peer"
        }, {"name": "max_id", "type": "int"}, {"name": "still_unread_count", "type": "int"}, {
            "name": "pts",
            "type": "int"
        }, {"name": "pts_count", "type": "int"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "791617983",
        "predicate": "updateReadHistoryOutbox",
        "params": [{"name": "peer", "type": "Peer"}, {"name": "max_id", "type": "int"}, {
            "name": "pts",
            "type": "int"
        }, {"name": "pts_count", "type": "int"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-2066640507",
        "predicate": "messages.affectedMessages",
        "params": [{"name": "pts", "type": "int"}, {"name": "pts_count", "type": "int"}],
        "type": "messages.AffectedMessages"
    }, {
        "@": API,
        "id": "2139689491",
        "predicate": "updateWebPage",
        "params": [{"name": "webpage", "type": "WebPage"}, {"name": "pts", "type": "int"}, {
            "name": "pts_count",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "-350980120",
        "predicate": "webPageEmpty",
        "params": [{"name": "id", "type": "long"}],
        "type": "WebPage"
    }, {
        "@": API,
        "id": "-981018084",
        "predicate": "webPagePending",
        "params": [{"name": "id", "type": "long"}, {"name": "date", "type": "int"}],
        "type": "WebPage"
    }, {
        "@": API,
        "id": "-392411726",
        "predicate": "webPage",
        "params": [{"name": "flags", "type": "#"}, {"name": "id", "type": "long"}, {
            "name": "url",
            "type": "string"
        }, {"name": "display_url", "type": "string"}, {"name": "hash", "type": "int"}, {
            "name": "type",
            "type": "flags.0?string"
        }, {"name": "site_name", "type": "flags.1?string"}, {
            "name": "title",
            "type": "flags.2?string"
        }, {"name": "description", "type": "flags.3?string"}, {
            "name": "photo",
            "type": "flags.4?Photo"
        }, {"name": "embed_url", "type": "flags.5?string"}, {
            "name": "embed_type",
            "type": "flags.5?string"
        }, {"name": "embed_width", "type": "flags.6?int"}, {
            "name": "embed_height",
            "type": "flags.6?int"
        }, {"name": "duration", "type": "flags.7?int"}, {
            "name": "author",
            "type": "flags.8?string"
        }, {"name": "document", "type": "flags.9?Document"}, {
            "name": "cached_page",
            "type": "flags.10?Page"
        }, {"name": "attributes", "type": "flags.12?Vector<WebPageAttribute>"}],
        "type": "WebPage"
    }, {
        "@": API,
        "id": "-1557277184",
        "predicate": "messageMediaWebPage",
        "params": [{"name": "webpage", "type": "WebPage"}],
        "type": "MessageMedia"
    }, {
        "@": API,
        "id": "-1392388579",
        "predicate": "authorization",
        "params": [{"name": "flags", "type": "#"}, {"name": "current", "type": "flags.0?true"}, {
            "name": "official_app",
            "type": "flags.1?true"
        }, {"name": "password_pending", "type": "flags.2?true"}, {
            "name": "hash",
            "type": "long"
        }, {"name": "device_model", "type": "string"}, {
            "name": "platform",
            "type": "string"
        }, {"name": "system_version", "type": "string"}, {"name": "api_id", "type": "int"}, {
            "name": "app_name",
            "type": "string"
        }, {"name": "app_version", "type": "string"}, {"name": "date_created", "type": "int"}, {
            "name": "date_active",
            "type": "int"
        }, {"name": "ip", "type": "string"}, {"name": "country", "type": "string"}, {
            "name": "region",
            "type": "string"
        }],
        "type": "Authorization"
    }, {
        "@": API,
        "id": "307276766",
        "predicate": "account.authorizations",
        "params": [{"name": "authorizations", "type": "Vector<Authorization>"}],
        "type": "account.Authorizations"
    }, {
        "@": API,
        "id": "-1390001672",
        "predicate": "account.password",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "has_recovery",
            "type": "flags.0?true"
        }, {"name": "has_secure_values", "type": "flags.1?true"}, {
            "name": "has_password",
            "type": "flags.2?true"
        }, {"name": "current_algo", "type": "flags.2?PasswordKdfAlgo"}, {
            "name": "srp_B",
            "type": "flags.2?bytes"
        }, {"name": "srp_id", "type": "flags.2?long"}, {
            "name": "hint",
            "type": "flags.3?string"
        }, {"name": "email_unconfirmed_pattern", "type": "flags.4?string"}, {
            "name": "new_algo",
            "type": "PasswordKdfAlgo"
        }, {"name": "new_secure_algo", "type": "SecurePasswordKdfAlgo"}, {"name": "secure_random", "type": "bytes"}],
        "type": "account.Password"
    }, {
        "@": API,
        "id": "-1705233435",
        "predicate": "account.passwordSettings",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "email",
            "type": "flags.0?string"
        }, {"name": "secure_settings", "type": "flags.1?SecureSecretSettings"}],
        "type": "account.PasswordSettings"
    }, {
        "@": API,
        "id": "-1036572727",
        "predicate": "account.passwordInputSettings",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "new_algo",
            "type": "flags.0?PasswordKdfAlgo"
        }, {"name": "new_password_hash", "type": "flags.0?bytes"}, {
            "name": "hint",
            "type": "flags.0?string"
        }, {"name": "email", "type": "flags.1?string"}, {
            "name": "new_secure_settings",
            "type": "flags.2?SecureSecretSettings"
        }],
        "type": "account.PasswordInputSettings"
    }, {
        "@": API,
        "id": "326715557",
        "predicate": "auth.passwordRecovery",
        "params": [{"name": "email_pattern", "type": "string"}],
        "type": "auth.PasswordRecovery"
    }, {
        "@": API,
        "id": "-1052959727",
        "predicate": "inputMediaVenue",
        "params": [{"name": "geo_point", "type": "InputGeoPoint"}, {
            "name": "title",
            "type": "string"
        }, {"name": "address", "type": "string"}, {"name": "provider", "type": "string"}, {
            "name": "venue_id",
            "type": "string"
        }, {"name": "venue_type", "type": "string"}],
        "type": "InputMedia"
    }, {
        "@": API,
        "id": "784356159",
        "predicate": "messageMediaVenue",
        "params": [{"name": "geo", "type": "GeoPoint"}, {"name": "title", "type": "string"}, {
            "name": "address",
            "type": "string"
        }, {"name": "provider", "type": "string"}, {"name": "venue_id", "type": "string"}, {
            "name": "venue_type",
            "type": "string"
        }],
        "type": "MessageMedia"
    }, {
        "@": API,
        "id": "-1551583367",
        "predicate": "receivedNotifyMessage",
        "params": [{"name": "id", "type": "int"}, {"name": "flags", "type": "int"}],
        "type": "ReceivedNotifyMessage"
    }, {
        "@": API,
        "id": "1776236393",
        "predicate": "chatInviteEmpty",
        "params": [],
        "type": "ExportedChatInvite"
    }, {
        "@": API,
        "id": "-64092740",
        "predicate": "chatInviteExported",
        "params": [{"name": "link", "type": "string"}],
        "type": "ExportedChatInvite"
    }, {
        "@": API,
        "id": "1516793212",
        "predicate": "chatInviteAlready",
        "params": [{"name": "chat", "type": "Chat"}],
        "type": "ChatInvite"
    }, {
        "@": API,
        "id": "-540871282",
        "predicate": "chatInvite",
        "params": [{"name": "flags", "type": "#"}, {"name": "channel", "type": "flags.0?true"}, {
            "name": "broadcast",
            "type": "flags.1?true"
        }, {"name": "public", "type": "flags.2?true"}, {"name": "megagroup", "type": "flags.3?true"}, {
            "name": "title",
            "type": "string"
        }, {"name": "photo", "type": "Photo"}, {"name": "participants_count", "type": "int"}, {
            "name": "participants",
            "type": "flags.4?Vector<User>"
        }],
        "type": "ChatInvite"
    }, {
        "@": API,
        "id": "-123931160",
        "predicate": "messageActionChatJoinedByLink",
        "params": [{"name": "inviter_id", "type": "int"}],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "1757493555",
        "predicate": "updateReadMessagesContents",
        "params": [{"name": "messages", "type": "Vector<int>"}, {"name": "pts", "type": "int"}, {
            "name": "pts_count",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "-4838507",
        "predicate": "inputStickerSetEmpty",
        "params": [],
        "type": "InputStickerSet"
    }, {
        "@": API,
        "id": "-1645763991",
        "predicate": "inputStickerSetID",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}],
        "type": "InputStickerSet"
    }, {
        "@": API,
        "id": "-2044933984",
        "predicate": "inputStickerSetShortName",
        "params": [{"name": "short_name", "type": "string"}],
        "type": "InputStickerSet"
    }, {
        "@": API,
        "id": "-290164953",
        "predicate": "stickerSet",
        "params": [{"name": "flags", "type": "#"}, {"name": "archived", "type": "flags.1?true"}, {
            "name": "official",
            "type": "flags.2?true"
        }, {"name": "masks", "type": "flags.3?true"}, {
            "name": "animated",
            "type": "flags.5?true"
        }, {"name": "installed_date", "type": "flags.0?int"}, {"name": "id", "type": "long"}, {
            "name": "access_hash",
            "type": "long"
        }, {"name": "title", "type": "string"}, {"name": "short_name", "type": "string"}, {
            "name": "thumb",
            "type": "flags.4?PhotoSize"
        }, {"name": "thumb_dc_id", "type": "flags.4?int"}, {"name": "count", "type": "int"}, {
            "name": "hash",
            "type": "int"
        }],
        "type": "StickerSet"
    }, {
        "@": API,
        "id": "-1240849242",
        "predicate": "messages.stickerSet",
        "params": [{"name": "set", "type": "StickerSet"}, {
            "name": "packs",
            "type": "Vector<StickerPack>"
        }, {"name": "documents", "type": "Vector<Document>"}],
        "type": "messages.StickerSet"
    }, {
        "@": API,
        "id": "-1820043071",
        "predicate": "user",
        "params": [{"name": "flags", "type": "#"}, {"name": "self", "type": "flags.10?true"}, {
            "name": "contact",
            "type": "flags.11?true"
        }, {"name": "mutual_contact", "type": "flags.12?true"}, {
            "name": "deleted",
            "type": "flags.13?true"
        }, {"name": "bot", "type": "flags.14?true"}, {
            "name": "bot_chat_history",
            "type": "flags.15?true"
        }, {"name": "bot_nochats", "type": "flags.16?true"}, {
            "name": "verified",
            "type": "flags.17?true"
        }, {"name": "restricted", "type": "flags.18?true"}, {
            "name": "min",
            "type": "flags.20?true"
        }, {"name": "bot_inline_geo", "type": "flags.21?true"}, {
            "name": "support",
            "type": "flags.23?true"
        }, {"name": "scam", "type": "flags.24?true"}, {
            "name": "apply_min_photo",
            "type": "flags.25?true"
        }, {"name": "id", "type": "int"}, {"name": "access_hash", "type": "flags.0?long"}, {
            "name": "first_name",
            "type": "flags.1?string"
        }, {"name": "last_name", "type": "flags.2?string"}, {
            "name": "username",
            "type": "flags.3?string"
        }, {"name": "phone", "type": "flags.4?string"}, {
            "name": "photo",
            "type": "flags.5?UserProfilePhoto"
        }, {"name": "status", "type": "flags.6?UserStatus"}, {
            "name": "bot_info_version",
            "type": "flags.14?int"
        }, {
            "name": "restriction_reason",
            "type": "flags.18?Vector<RestrictionReason>"
        }, {"name": "bot_inline_placeholder", "type": "flags.19?string"}, {
            "name": "lang_code",
            "type": "flags.22?string"
        }],
        "type": "User"
    }, {
        "@": API,
        "id": "-1032140601",
        "predicate": "botCommand",
        "params": [{"name": "command", "type": "string"}, {"name": "description", "type": "string"}],
        "type": "BotCommand"
    }, {
        "@": API,
        "id": "-1729618630",
        "predicate": "botInfo",
        "params": [{"name": "user_id", "type": "int"}, {"name": "description", "type": "string"}, {
            "name": "commands",
            "type": "Vector<BotCommand>"
        }],
        "type": "BotInfo"
    }, {
        "@": API,
        "id": "-1560655744",
        "predicate": "keyboardButton",
        "params": [{"name": "text", "type": "string"}],
        "type": "KeyboardButton"
    }, {
        "@": API,
        "id": "2002815875",
        "predicate": "keyboardButtonRow",
        "params": [{"name": "buttons", "type": "Vector<KeyboardButton>"}],
        "type": "KeyboardButtonRow"
    }, {
        "@": API,
        "id": "-1606526075",
        "predicate": "replyKeyboardHide",
        "params": [{"name": "flags", "type": "#"}, {"name": "selective", "type": "flags.2?true"}],
        "type": "ReplyMarkup"
    }, {
        "@": API,
        "id": "-200242528",
        "predicate": "replyKeyboardForceReply",
        "params": [{"name": "flags", "type": "#"}, {"name": "single_use", "type": "flags.1?true"}, {
            "name": "selective",
            "type": "flags.2?true"
        }],
        "type": "ReplyMarkup"
    }, {
        "@": API,
        "id": "889353612",
        "predicate": "replyKeyboardMarkup",
        "params": [{"name": "flags", "type": "#"}, {"name": "resize", "type": "flags.0?true"}, {
            "name": "single_use",
            "type": "flags.1?true"
        }, {"name": "selective", "type": "flags.2?true"}, {"name": "rows", "type": "Vector<KeyboardButtonRow>"}],
        "type": "ReplyMarkup"
    }, {
        "@": API,
        "id": "2072935910",
        "predicate": "inputPeerUser",
        "params": [{"name": "user_id", "type": "int"}, {"name": "access_hash", "type": "long"}],
        "type": "InputPeer"
    }, {
        "@": API,
        "id": "-668391402",
        "predicate": "inputUser",
        "params": [{"name": "user_id", "type": "int"}, {"name": "access_hash", "type": "long"}],
        "type": "InputUser"
    }, {
        "@": API,
        "id": "-1148011883",
        "predicate": "messageEntityUnknown",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "@": API,
        "id": "-100378723",
        "predicate": "messageEntityMention",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "@": API,
        "id": "1868782349",
        "predicate": "messageEntityHashtag",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "@": API,
        "id": "1827637959",
        "predicate": "messageEntityBotCommand",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "@": API,
        "id": "1859134776",
        "predicate": "messageEntityUrl",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "@": API,
        "id": "1692693954",
        "predicate": "messageEntityEmail",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "@": API,
        "id": "-1117713463",
        "predicate": "messageEntityBold",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "@": API,
        "id": "-2106619040",
        "predicate": "messageEntityItalic",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "@": API,
        "id": "681706865",
        "predicate": "messageEntityCode",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "@": API,
        "id": "1938967520",
        "predicate": "messageEntityPre",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}, {
            "name": "language",
            "type": "string"
        }],
        "type": "MessageEntity"
    }, {
        "@": API,
        "id": "1990644519",
        "predicate": "messageEntityTextUrl",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}, {
            "name": "url",
            "type": "string"
        }],
        "type": "MessageEntity"
    }, {
        "@": API,
        "id": "301019932",
        "predicate": "updateShortSentMessage",
        "params": [{"name": "flags", "type": "#"}, {"name": "out", "type": "flags.1?true"}, {
            "name": "id",
            "type": "int"
        }, {"name": "pts", "type": "int"}, {"name": "pts_count", "type": "int"}, {
            "name": "date",
            "type": "int"
        }, {"name": "media", "type": "flags.9?MessageMedia"}, {
            "name": "entities",
            "type": "flags.7?Vector<MessageEntity>"
        }],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-292807034",
        "predicate": "inputChannelEmpty",
        "params": [],
        "type": "InputChannel"
    }, {
        "@": API,
        "id": "-1343524562",
        "predicate": "inputChannel",
        "params": [{"name": "channel_id", "type": "int"}, {"name": "access_hash", "type": "long"}],
        "type": "InputChannel"
    }, {
        "@": API,
        "id": "-1109531342",
        "predicate": "peerChannel",
        "params": [{"name": "channel_id", "type": "int"}],
        "type": "Peer"
    }, {
        "@": API,
        "id": "548253432",
        "predicate": "inputPeerChannel",
        "params": [{"name": "channel_id", "type": "int"}, {"name": "access_hash", "type": "long"}],
        "type": "InputPeer"
    }, {
        "@": API,
        "id": "-753232354",
        "predicate": "channel",
        "params": [{"name": "flags", "type": "#"}, {"name": "creator", "type": "flags.0?true"}, {
            "name": "left",
            "type": "flags.2?true"
        }, {"name": "broadcast", "type": "flags.5?true"}, {
            "name": "verified",
            "type": "flags.7?true"
        }, {"name": "megagroup", "type": "flags.8?true"}, {
            "name": "restricted",
            "type": "flags.9?true"
        }, {"name": "signatures", "type": "flags.11?true"}, {"name": "min", "type": "flags.12?true"}, {
            "name": "scam",
            "type": "flags.19?true"
        }, {"name": "has_link", "type": "flags.20?true"}, {
            "name": "has_geo",
            "type": "flags.21?true"
        }, {"name": "slowmode_enabled", "type": "flags.22?true"}, {"name": "id", "type": "int"}, {
            "name": "access_hash",
            "type": "flags.13?long"
        }, {"name": "title", "type": "string"}, {"name": "username", "type": "flags.6?string"}, {
            "name": "photo",
            "type": "ChatPhoto"
        }, {"name": "date", "type": "int"}, {"name": "version", "type": "int"}, {
            "name": "restriction_reason",
            "type": "flags.9?Vector<RestrictionReason>"
        }, {"name": "admin_rights", "type": "flags.14?ChatAdminRights"}, {
            "name": "banned_rights",
            "type": "flags.15?ChatBannedRights"
        }, {"name": "default_banned_rights", "type": "flags.18?ChatBannedRights"}, {
            "name": "participants_count",
            "type": "flags.17?int"
        }],
        "type": "Chat"
    }, {
        "@": API,
        "id": "681420594",
        "predicate": "channelForbidden",
        "params": [{"name": "flags", "type": "#"}, {"name": "broadcast", "type": "flags.5?true"}, {
            "name": "megagroup",
            "type": "flags.8?true"
        }, {"name": "id", "type": "int"}, {"name": "access_hash", "type": "long"}, {
            "name": "title",
            "type": "string"
        }, {"name": "until_date", "type": "flags.16?int"}],
        "type": "Chat"
    }, {
        "@": API,
        "id": "2131196633",
        "predicate": "contacts.resolvedPeer",
        "params": [{"name": "peer", "type": "Peer"}, {"name": "chats", "type": "Vector<Chat>"}, {
            "name": "users",
            "type": "Vector<User>"
        }],
        "type": "contacts.ResolvedPeer"
    }, {
        "@": API,
        "id": "-253335766",
        "predicate": "channelFull",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "can_view_participants",
            "type": "flags.3?true"
        }, {"name": "can_set_username", "type": "flags.6?true"}, {
            "name": "can_set_stickers",
            "type": "flags.7?true"
        }, {"name": "hidden_prehistory", "type": "flags.10?true"}, {
            "name": "can_set_location",
            "type": "flags.16?true"
        }, {"name": "has_scheduled", "type": "flags.19?true"}, {
            "name": "can_view_stats",
            "type": "flags.20?true"
        }, {"name": "id", "type": "int"}, {"name": "about", "type": "string"}, {
            "name": "participants_count",
            "type": "flags.0?int"
        }, {"name": "admins_count", "type": "flags.1?int"}, {
            "name": "kicked_count",
            "type": "flags.2?int"
        }, {"name": "banned_count", "type": "flags.2?int"}, {
            "name": "online_count",
            "type": "flags.13?int"
        }, {"name": "read_inbox_max_id", "type": "int"}, {
            "name": "read_outbox_max_id",
            "type": "int"
        }, {"name": "unread_count", "type": "int"}, {"name": "chat_photo", "type": "Photo"}, {
            "name": "notify_settings",
            "type": "PeerNotifySettings"
        }, {"name": "exported_invite", "type": "ExportedChatInvite"}, {
            "name": "bot_info",
            "type": "Vector<BotInfo>"
        }, {"name": "migrated_from_chat_id", "type": "flags.4?int"}, {
            "name": "migrated_from_max_id",
            "type": "flags.4?int"
        }, {"name": "pinned_msg_id", "type": "flags.5?int"}, {
            "name": "stickerset",
            "type": "flags.8?StickerSet"
        }, {"name": "available_min_id", "type": "flags.9?int"}, {
            "name": "folder_id",
            "type": "flags.11?int"
        }, {"name": "linked_chat_id", "type": "flags.14?int"}, {
            "name": "location",
            "type": "flags.15?ChannelLocation"
        }, {"name": "slowmode_seconds", "type": "flags.17?int"}, {
            "name": "slowmode_next_send_date",
            "type": "flags.18?int"
        }, {"name": "stats_dc", "type": "flags.12?int"}, {"name": "pts", "type": "int"}],
        "type": "ChatFull"
    }, {
        "@": API,
        "id": "182649427",
        "predicate": "messageRange",
        "params": [{"name": "min_id", "type": "int"}, {"name": "max_id", "type": "int"}],
        "type": "MessageRange"
    }, {
        "@": API,
        "id": "-1725551049",
        "predicate": "messages.channelMessages",
        "params": [{"name": "flags", "type": "#"}, {"name": "inexact", "type": "flags.1?true"}, {
            "name": "pts",
            "type": "int"
        }, {"name": "count", "type": "int"}, {"name": "messages", "type": "Vector<Message>"}, {
            "name": "chats",
            "type": "Vector<Chat>"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "messages.Messages"
    }, {
        "@": API,
        "id": "-1781355374",
        "predicate": "messageActionChannelCreate",
        "params": [{"name": "title", "type": "string"}],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "-352032773",
        "predicate": "updateChannelTooLong",
        "params": [{"name": "flags", "type": "#"}, {"name": "channel_id", "type": "int"}, {
            "name": "pts",
            "type": "flags.0?int"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1227598250",
        "predicate": "updateChannel",
        "params": [{"name": "channel_id", "type": "int"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "1656358105",
        "predicate": "updateNewChannelMessage",
        "params": [{"name": "message", "type": "Message"}, {"name": "pts", "type": "int"}, {
            "name": "pts_count",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "856380452",
        "predicate": "updateReadChannelInbox",
        "params": [{"name": "flags", "type": "#"}, {"name": "folder_id", "type": "flags.0?int"}, {
            "name": "channel_id",
            "type": "int"
        }, {"name": "max_id", "type": "int"}, {"name": "still_unread_count", "type": "int"}, {
            "name": "pts",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1015733815",
        "predicate": "updateDeleteChannelMessages",
        "params": [{"name": "channel_id", "type": "int"}, {"name": "messages", "type": "Vector<int>"}, {
            "name": "pts",
            "type": "int"
        }, {"name": "pts_count", "type": "int"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1734268085",
        "predicate": "updateChannelMessageViews",
        "params": [{"name": "channel_id", "type": "int"}, {"name": "id", "type": "int"}, {
            "name": "views",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "1041346555",
        "predicate": "updates.channelDifferenceEmpty",
        "params": [{"name": "flags", "type": "#"}, {"name": "final", "type": "flags.0?true"}, {
            "name": "pts",
            "type": "int"
        }, {"name": "timeout", "type": "flags.1?int"}],
        "type": "updates.ChannelDifference"
    }, {
        "@": API,
        "id": "-1531132162",
        "predicate": "updates.channelDifferenceTooLong",
        "params": [{"name": "flags", "type": "#"}, {"name": "final", "type": "flags.0?true"}, {
            "name": "timeout",
            "type": "flags.1?int"
        }, {"name": "dialog", "type": "Dialog"}, {"name": "messages", "type": "Vector<Message>"}, {
            "name": "chats",
            "type": "Vector<Chat>"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "updates.ChannelDifference"
    }, {
        "@": API,
        "id": "543450958",
        "predicate": "updates.channelDifference",
        "params": [{"name": "flags", "type": "#"}, {"name": "final", "type": "flags.0?true"}, {
            "name": "pts",
            "type": "int"
        }, {"name": "timeout", "type": "flags.1?int"}, {
            "name": "new_messages",
            "type": "Vector<Message>"
        }, {"name": "other_updates", "type": "Vector<Update>"}, {
            "name": "chats",
            "type": "Vector<Chat>"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "updates.ChannelDifference"
    }, {
        "@": API,
        "id": "-1798033689",
        "predicate": "channelMessagesFilterEmpty",
        "params": [],
        "type": "ChannelMessagesFilter"
    }, {
        "@": API,
        "id": "-847783593",
        "predicate": "channelMessagesFilter",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "exclude_new_messages",
            "type": "flags.1?true"
        }, {"name": "ranges", "type": "Vector<MessageRange>"}],
        "type": "ChannelMessagesFilter"
    }, {
        "@": API,
        "id": "367766557",
        "predicate": "channelParticipant",
        "params": [{"name": "user_id", "type": "int"}, {"name": "date", "type": "int"}],
        "type": "ChannelParticipant"
    }, {
        "@": API,
        "id": "-1557620115",
        "predicate": "channelParticipantSelf",
        "params": [{"name": "user_id", "type": "int"}, {"name": "inviter_id", "type": "int"}, {
            "name": "date",
            "type": "int"
        }],
        "type": "ChannelParticipant"
    }, {
        "@": API,
        "id": "-2138237532",
        "predicate": "channelParticipantCreator",
        "params": [{"name": "flags", "type": "#"}, {"name": "user_id", "type": "int"}, {
            "name": "rank",
            "type": "flags.0?string"
        }],
        "type": "ChannelParticipant"
    }, {
        "@": API,
        "id": "-566281095",
        "predicate": "channelParticipantsRecent",
        "params": [],
        "type": "ChannelParticipantsFilter"
    }, {
        "@": API,
        "id": "-1268741783",
        "predicate": "channelParticipantsAdmins",
        "params": [],
        "type": "ChannelParticipantsFilter"
    }, {
        "@": API,
        "id": "-1548400251",
        "predicate": "channelParticipantsKicked",
        "params": [{"name": "q", "type": "string"}],
        "type": "ChannelParticipantsFilter"
    }, {
        "@": API,
        "id": "-177282392",
        "predicate": "channels.channelParticipants",
        "params": [{"name": "count", "type": "int"}, {
            "name": "participants",
            "type": "Vector<ChannelParticipant>"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "channels.ChannelParticipants"
    }, {
        "@": API,
        "id": "-791039645",
        "predicate": "channels.channelParticipant",
        "params": [{"name": "participant", "type": "ChannelParticipant"}, {"name": "users", "type": "Vector<User>"}],
        "type": "channels.ChannelParticipant"
    }, {
        "@": API,
        "id": "-636267638",
        "predicate": "chatParticipantCreator",
        "params": [{"name": "user_id", "type": "int"}],
        "type": "ChatParticipant"
    }, {
        "@": API,
        "id": "-489233354",
        "predicate": "chatParticipantAdmin",
        "params": [{"name": "user_id", "type": "int"}, {"name": "inviter_id", "type": "int"}, {
            "name": "date",
            "type": "int"
        }],
        "type": "ChatParticipant"
    }, {
        "@": API,
        "id": "-1232070311",
        "predicate": "updateChatParticipantAdmin",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "user_id", "type": "int"}, {
            "name": "is_admin",
            "type": "Bool"
        }, {"name": "version", "type": "int"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "1371385889",
        "predicate": "messageActionChatMigrateTo",
        "params": [{"name": "channel_id", "type": "int"}],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "-1336546578",
        "predicate": "messageActionChannelMigrateFrom",
        "params": [{"name": "title", "type": "string"}, {"name": "chat_id", "type": "int"}],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "-1328445861",
        "predicate": "channelParticipantsBots",
        "params": [],
        "type": "ChannelParticipantsFilter"
    }, {
        "@": API,
        "id": "2013922064",
        "predicate": "help.termsOfService",
        "params": [{"name": "flags", "type": "#"}, {"name": "popup", "type": "flags.0?true"}, {
            "name": "id",
            "type": "DataJSON"
        }, {"name": "text", "type": "string"}, {
            "name": "entities",
            "type": "Vector<MessageEntity>"
        }, {"name": "min_age_confirm", "type": "flags.1?int"}],
        "type": "help.TermsOfService"
    }, {
        "@": API,
        "id": "1753886890",
        "predicate": "updateNewStickerSet",
        "params": [{"name": "stickerset", "type": "messages.StickerSet"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "196268545",
        "predicate": "updateStickerSetsOrder",
        "params": [{"name": "flags", "type": "#"}, {"name": "masks", "type": "flags.0?true"}, {
            "name": "order",
            "type": "Vector<long>"
        }],
        "type": "Update"
    }, {"id": "1135492588", "predicate": "updateStickerSets", "params": [], "type": "Update"}, {
        "@": API,
        "id": "372165663",
        "predicate": "foundGif",
        "params": [{"name": "url", "type": "string"}, {"name": "thumb_url", "type": "string"}, {
            "name": "content_url",
            "type": "string"
        }, {"name": "content_type", "type": "string"}, {"name": "w", "type": "int"}, {"name": "h", "type": "int"}],
        "type": "FoundGif"
    }, {
        "@": API,
        "id": "-1670052855",
        "predicate": "foundGifCached",
        "params": [{"name": "url", "type": "string"}, {"name": "photo", "type": "Photo"}, {
            "name": "document",
            "type": "Document"
        }],
        "type": "FoundGif"
    }, {
        "@": API,
        "id": "1212395773",
        "predicate": "inputMediaGifExternal",
        "params": [{"name": "url", "type": "string"}, {"name": "q", "type": "string"}],
        "type": "InputMedia"
    }, {
        "@": API,
        "id": "1158290442",
        "predicate": "messages.foundGifs",
        "params": [{"name": "next_offset", "type": "int"}, {"name": "results", "type": "Vector<FoundGif>"}],
        "type": "messages.FoundGifs"
    }, {
        "@": API,
        "id": "-402498398",
        "predicate": "messages.savedGifsNotModified",
        "params": [],
        "type": "messages.SavedGifs"
    }, {
        "@": API,
        "id": "772213157",
        "predicate": "messages.savedGifs",
        "params": [{"name": "hash", "type": "int"}, {"name": "gifs", "type": "Vector<Document>"}],
        "type": "messages.SavedGifs"
    }, {"id": "-1821035490", "predicate": "updateSavedGifs", "params": [], "type": "Update"}, {
        "@": API,
        "id": "864077702",
        "predicate": "inputBotInlineMessageMediaAuto",
        "params": [{"name": "flags", "type": "#"}, {"name": "message", "type": "string"}, {
            "name": "entities",
            "type": "flags.1?Vector<MessageEntity>"
        }, {"name": "reply_markup", "type": "flags.2?ReplyMarkup"}],
        "type": "InputBotInlineMessage"
    }, {
        "@": API,
        "id": "1036876423",
        "predicate": "inputBotInlineMessageText",
        "params": [{"name": "flags", "type": "#"}, {"name": "no_webpage", "type": "flags.0?true"}, {
            "name": "message",
            "type": "string"
        }, {"name": "entities", "type": "flags.1?Vector<MessageEntity>"}, {
            "name": "reply_markup",
            "type": "flags.2?ReplyMarkup"
        }],
        "type": "InputBotInlineMessage"
    }, {
        "@": API,
        "id": "-2000710887",
        "predicate": "inputBotInlineResult",
        "params": [{"name": "flags", "type": "#"}, {"name": "id", "type": "string"}, {
            "name": "type",
            "type": "string"
        }, {"name": "title", "type": "flags.1?string"}, {
            "name": "description",
            "type": "flags.2?string"
        }, {"name": "url", "type": "flags.3?string"}, {
            "name": "thumb",
            "type": "flags.4?InputWebDocument"
        }, {"name": "content", "type": "flags.5?InputWebDocument"}, {
            "name": "send_message",
            "type": "InputBotInlineMessage"
        }],
        "type": "InputBotInlineResult"
    }, {
        "@": API,
        "id": "1984755728",
        "predicate": "botInlineMessageMediaAuto",
        "params": [{"name": "flags", "type": "#"}, {"name": "message", "type": "string"}, {
            "name": "entities",
            "type": "flags.1?Vector<MessageEntity>"
        }, {"name": "reply_markup", "type": "flags.2?ReplyMarkup"}],
        "type": "BotInlineMessage"
    }, {
        "@": API,
        "id": "-1937807902",
        "predicate": "botInlineMessageText",
        "params": [{"name": "flags", "type": "#"}, {"name": "no_webpage", "type": "flags.0?true"}, {
            "name": "message",
            "type": "string"
        }, {"name": "entities", "type": "flags.1?Vector<MessageEntity>"}, {
            "name": "reply_markup",
            "type": "flags.2?ReplyMarkup"
        }],
        "type": "BotInlineMessage"
    }, {
        "@": API,
        "id": "295067450",
        "predicate": "botInlineResult",
        "params": [{"name": "flags", "type": "#"}, {"name": "id", "type": "string"}, {
            "name": "type",
            "type": "string"
        }, {"name": "title", "type": "flags.1?string"}, {
            "name": "description",
            "type": "flags.2?string"
        }, {"name": "url", "type": "flags.3?string"}, {
            "name": "thumb",
            "type": "flags.4?WebDocument"
        }, {"name": "content", "type": "flags.5?WebDocument"}, {"name": "send_message", "type": "BotInlineMessage"}],
        "type": "BotInlineResult"
    }, {
        "@": API,
        "id": "-1803769784",
        "predicate": "messages.botResults",
        "params": [{"name": "flags", "type": "#"}, {"name": "gallery", "type": "flags.0?true"}, {
            "name": "query_id",
            "type": "long"
        }, {"name": "next_offset", "type": "flags.1?string"}, {
            "name": "switch_pm",
            "type": "flags.2?InlineBotSwitchPM"
        }, {"name": "results", "type": "Vector<BotInlineResult>"}, {
            "name": "cache_time",
            "type": "int"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "messages.BotResults"
    }, {
        "@": API,
        "id": "1417832080",
        "predicate": "updateBotInlineQuery",
        "params": [{"name": "flags", "type": "#"}, {"name": "query_id", "type": "long"}, {
            "name": "user_id",
            "type": "int"
        }, {"name": "query", "type": "string"}, {"name": "geo", "type": "flags.0?GeoPoint"}, {
            "name": "offset",
            "type": "string"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "239663460",
        "predicate": "updateBotInlineSend",
        "params": [{"name": "flags", "type": "#"}, {"name": "user_id", "type": "int"}, {
            "name": "query",
            "type": "string"
        }, {"name": "geo", "type": "flags.0?GeoPoint"}, {"name": "id", "type": "string"}, {
            "name": "msg_id",
            "type": "flags.1?InputBotInlineMessageID"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "1358283666",
        "predicate": "inputMessagesFilterVoice",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "@": API,
        "id": "928101534",
        "predicate": "inputMessagesFilterMusic",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "@": API,
        "id": "-1107622874",
        "predicate": "inputPrivacyKeyChatInvite",
        "params": [],
        "type": "InputPrivacyKey"
    }, {
        "@": API,
        "id": "1343122938",
        "predicate": "privacyKeyChatInvite",
        "params": [],
        "type": "PrivacyKey"
    }, {
        "@": API,
        "id": "1571494644",
        "predicate": "exportedMessageLink",
        "params": [{"name": "link", "type": "string"}, {"name": "html", "type": "string"}],
        "type": "ExportedMessageLink"
    }, {
        "@": API,
        "id": "893020267",
        "predicate": "messageFwdHeader",
        "params": [{"name": "flags", "type": "#"}, {"name": "from_id", "type": "flags.0?int"}, {
            "name": "from_name",
            "type": "flags.5?string"
        }, {"name": "date", "type": "int"}, {"name": "channel_id", "type": "flags.1?int"}, {
            "name": "channel_post",
            "type": "flags.2?int"
        }, {"name": "post_author", "type": "flags.3?string"}, {
            "name": "saved_from_peer",
            "type": "flags.4?Peer"
        }, {"name": "saved_from_msg_id", "type": "flags.4?int"}, {"name": "psa_type", "type": "flags.6?string"}],
        "type": "MessageFwdHeader"
    }, {
        "@": API,
        "id": "457133559",
        "predicate": "updateEditChannelMessage",
        "params": [{"name": "message", "type": "Message"}, {"name": "pts", "type": "int"}, {
            "name": "pts_count",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1738988427",
        "predicate": "updateChannelPinnedMessage",
        "params": [{"name": "channel_id", "type": "int"}, {"name": "id", "type": "int"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1799538451",
        "predicate": "messageActionPinMessage",
        "params": [],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "1923290508",
        "predicate": "auth.codeTypeSms",
        "params": [],
        "type": "auth.CodeType"
    }, {
        "@": API,
        "id": "1948046307",
        "predicate": "auth.codeTypeCall",
        "params": [],
        "type": "auth.CodeType"
    }, {
        "@": API,
        "id": "577556219",
        "predicate": "auth.codeTypeFlashCall",
        "params": [],
        "type": "auth.CodeType"
    }, {
        "@": API,
        "id": "1035688326",
        "predicate": "auth.sentCodeTypeApp",
        "params": [{"name": "length", "type": "int"}],
        "type": "auth.SentCodeType"
    }, {
        "@": API,
        "id": "-1073693790",
        "predicate": "auth.sentCodeTypeSms",
        "params": [{"name": "length", "type": "int"}],
        "type": "auth.SentCodeType"
    }, {
        "@": API,
        "id": "1398007207",
        "predicate": "auth.sentCodeTypeCall",
        "params": [{"name": "length", "type": "int"}],
        "type": "auth.SentCodeType"
    }, {
        "@": API,
        "id": "-1425815847",
        "predicate": "auth.sentCodeTypeFlashCall",
        "params": [{"name": "pattern", "type": "string"}],
        "type": "auth.SentCodeType"
    }, {
        "@": API,
        "id": "629866245",
        "predicate": "keyboardButtonUrl",
        "params": [{"name": "text", "type": "string"}, {"name": "url", "type": "string"}],
        "type": "KeyboardButton"
    }, {
        "@": API,
        "id": "1748655686",
        "predicate": "keyboardButtonCallback",
        "params": [{"name": "text", "type": "string"}, {"name": "data", "type": "bytes"}],
        "type": "KeyboardButton"
    }, {
        "@": API,
        "id": "-1318425559",
        "predicate": "keyboardButtonRequestPhone",
        "params": [{"name": "text", "type": "string"}],
        "type": "KeyboardButton"
    }, {
        "@": API,
        "id": "-59151553",
        "predicate": "keyboardButtonRequestGeoLocation",
        "params": [{"name": "text", "type": "string"}],
        "type": "KeyboardButton"
    }, {
        "@": API,
        "id": "90744648",
        "predicate": "keyboardButtonSwitchInline",
        "params": [{"name": "flags", "type": "#"}, {"name": "same_peer", "type": "flags.0?true"}, {
            "name": "text",
            "type": "string"
        }, {"name": "query", "type": "string"}],
        "type": "KeyboardButton"
    }, {
        "@": API,
        "id": "1218642516",
        "predicate": "replyInlineMarkup",
        "params": [{"name": "rows", "type": "Vector<KeyboardButtonRow>"}],
        "type": "ReplyMarkup"
    }, {
        "@": API,
        "id": "911761060",
        "predicate": "messages.botCallbackAnswer",
        "params": [{"name": "flags", "type": "#"}, {"name": "alert", "type": "flags.1?true"}, {
            "name": "has_url",
            "type": "flags.3?true"
        }, {"name": "native_ui", "type": "flags.4?true"}, {"name": "message", "type": "flags.0?string"}, {
            "name": "url",
            "type": "flags.2?string"
        }, {"name": "cache_time", "type": "int"}],
        "type": "messages.BotCallbackAnswer"
    }, {
        "@": API,
        "id": "-415938591",
        "predicate": "updateBotCallbackQuery",
        "params": [{"name": "flags", "type": "#"}, {"name": "query_id", "type": "long"}, {
            "name": "user_id",
            "type": "int"
        }, {"name": "peer", "type": "Peer"}, {"name": "msg_id", "type": "int"}, {
            "name": "chat_instance",
            "type": "long"
        }, {"name": "data", "type": "flags.0?bytes"}, {"name": "game_short_name", "type": "flags.1?string"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "649453030",
        "predicate": "messages.messageEditData",
        "params": [{"name": "flags", "type": "#"}, {"name": "caption", "type": "flags.0?true"}],
        "type": "messages.MessageEditData"
    }, {
        "@": API,
        "id": "-469536605",
        "predicate": "updateEditMessage",
        "params": [{"name": "message", "type": "Message"}, {"name": "pts", "type": "int"}, {
            "name": "pts_count",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1045340827",
        "predicate": "inputBotInlineMessageMediaGeo",
        "params": [{"name": "flags", "type": "#"}, {"name": "geo_point", "type": "InputGeoPoint"}, {
            "name": "period",
            "type": "int"
        }, {"name": "reply_markup", "type": "flags.2?ReplyMarkup"}],
        "type": "InputBotInlineMessage"
    }, {
        "@": API,
        "id": "1098628881",
        "predicate": "inputBotInlineMessageMediaVenue",
        "params": [{"name": "flags", "type": "#"}, {"name": "geo_point", "type": "InputGeoPoint"}, {
            "name": "title",
            "type": "string"
        }, {"name": "address", "type": "string"}, {"name": "provider", "type": "string"}, {
            "name": "venue_id",
            "type": "string"
        }, {"name": "venue_type", "type": "string"}, {"name": "reply_markup", "type": "flags.2?ReplyMarkup"}],
        "type": "InputBotInlineMessage"
    }, {
        "@": API,
        "id": "-1494368259",
        "predicate": "inputBotInlineMessageMediaContact",
        "params": [{"name": "flags", "type": "#"}, {"name": "phone_number", "type": "string"}, {
            "name": "first_name",
            "type": "string"
        }, {"name": "last_name", "type": "string"}, {"name": "vcard", "type": "string"}, {
            "name": "reply_markup",
            "type": "flags.2?ReplyMarkup"
        }],
        "type": "InputBotInlineMessage"
    }, {
        "@": API,
        "id": "-1222451611",
        "predicate": "botInlineMessageMediaGeo",
        "params": [{"name": "flags", "type": "#"}, {"name": "geo", "type": "GeoPoint"}, {
            "name": "period",
            "type": "int"
        }, {"name": "reply_markup", "type": "flags.2?ReplyMarkup"}],
        "type": "BotInlineMessage"
    }, {
        "@": API,
        "id": "-1970903652",
        "predicate": "botInlineMessageMediaVenue",
        "params": [{"name": "flags", "type": "#"}, {"name": "geo", "type": "GeoPoint"}, {
            "name": "title",
            "type": "string"
        }, {"name": "address", "type": "string"}, {"name": "provider", "type": "string"}, {
            "name": "venue_id",
            "type": "string"
        }, {"name": "venue_type", "type": "string"}, {"name": "reply_markup", "type": "flags.2?ReplyMarkup"}],
        "type": "BotInlineMessage"
    }, {
        "@": API,
        "id": "416402882",
        "predicate": "botInlineMessageMediaContact",
        "params": [{"name": "flags", "type": "#"}, {"name": "phone_number", "type": "string"}, {
            "name": "first_name",
            "type": "string"
        }, {"name": "last_name", "type": "string"}, {"name": "vcard", "type": "string"}, {
            "name": "reply_markup",
            "type": "flags.2?ReplyMarkup"
        }],
        "type": "BotInlineMessage"
    }, {
        "@": API,
        "id": "-1462213465",
        "predicate": "inputBotInlineResultPhoto",
        "params": [{"name": "id", "type": "string"}, {"name": "type", "type": "string"}, {
            "name": "photo",
            "type": "InputPhoto"
        }, {"name": "send_message", "type": "InputBotInlineMessage"}],
        "type": "InputBotInlineResult"
    }, {
        "@": API,
        "id": "-459324",
        "predicate": "inputBotInlineResultDocument",
        "params": [{"name": "flags", "type": "#"}, {"name": "id", "type": "string"}, {
            "name": "type",
            "type": "string"
        }, {"name": "title", "type": "flags.1?string"}, {
            "name": "description",
            "type": "flags.2?string"
        }, {"name": "document", "type": "InputDocument"}, {"name": "send_message", "type": "InputBotInlineMessage"}],
        "type": "InputBotInlineResult"
    }, {
        "@": API,
        "id": "400266251",
        "predicate": "botInlineMediaResult",
        "params": [{"name": "flags", "type": "#"}, {"name": "id", "type": "string"}, {
            "name": "type",
            "type": "string"
        }, {"name": "photo", "type": "flags.0?Photo"}, {
            "name": "document",
            "type": "flags.1?Document"
        }, {"name": "title", "type": "flags.2?string"}, {
            "name": "description",
            "type": "flags.3?string"
        }, {"name": "send_message", "type": "BotInlineMessage"}],
        "type": "BotInlineResult"
    }, {
        "@": API,
        "id": "-1995686519",
        "predicate": "inputBotInlineMessageID",
        "params": [{"name": "dc_id", "type": "int"}, {"name": "id", "type": "long"}, {
            "name": "access_hash",
            "type": "long"
        }],
        "type": "InputBotInlineMessageID"
    }, {
        "@": API,
        "id": "-103646630",
        "predicate": "updateInlineBotCallbackQuery",
        "params": [{"name": "flags", "type": "#"}, {"name": "query_id", "type": "long"}, {
            "name": "user_id",
            "type": "int"
        }, {"name": "msg_id", "type": "InputBotInlineMessageID"}, {
            "name": "chat_instance",
            "type": "long"
        }, {"name": "data", "type": "flags.0?bytes"}, {"name": "game_short_name", "type": "flags.1?string"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "1008755359",
        "predicate": "inlineBotSwitchPM",
        "params": [{"name": "text", "type": "string"}, {"name": "start_param", "type": "string"}],
        "type": "InlineBotSwitchPM"
    }, {
        "@": API,
        "id": "863093588",
        "predicate": "messages.peerDialogs",
        "params": [{"name": "dialogs", "type": "Vector<Dialog>"}, {
            "name": "messages",
            "type": "Vector<Message>"
        }, {"name": "chats", "type": "Vector<Chat>"}, {"name": "users", "type": "Vector<User>"}, {
            "name": "state",
            "type": "updates.State"
        }],
        "type": "messages.PeerDialogs"
    }, {
        "@": API,
        "id": "-305282981",
        "predicate": "topPeer",
        "params": [{"name": "peer", "type": "Peer"}, {"name": "rating", "type": "double"}],
        "type": "TopPeer"
    }, {
        "@": API,
        "id": "-1419371685",
        "predicate": "topPeerCategoryBotsPM",
        "params": [],
        "type": "TopPeerCategory"
    }, {
        "@": API,
        "id": "344356834",
        "predicate": "topPeerCategoryBotsInline",
        "params": [],
        "type": "TopPeerCategory"
    }, {
        "@": API,
        "id": "104314861",
        "predicate": "topPeerCategoryCorrespondents",
        "params": [],
        "type": "TopPeerCategory"
    }, {
        "@": API,
        "id": "-1122524854",
        "predicate": "topPeerCategoryGroups",
        "params": [],
        "type": "TopPeerCategory"
    }, {
        "@": API,
        "id": "371037736",
        "predicate": "topPeerCategoryChannels",
        "params": [],
        "type": "TopPeerCategory"
    }, {
        "@": API,
        "id": "-75283823",
        "predicate": "topPeerCategoryPeers",
        "params": [{"name": "category", "type": "TopPeerCategory"}, {"name": "count", "type": "int"}, {
            "name": "peers",
            "type": "Vector<TopPeer>"
        }],
        "type": "TopPeerCategoryPeers"
    }, {
        "@": API,
        "id": "-567906571",
        "predicate": "contacts.topPeersNotModified",
        "params": [],
        "type": "contacts.TopPeers"
    }, {
        "@": API,
        "id": "1891070632",
        "predicate": "contacts.topPeers",
        "params": [{"name": "categories", "type": "Vector<TopPeerCategoryPeers>"}, {
            "name": "chats",
            "type": "Vector<Chat>"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "contacts.TopPeers"
    }, {
        "@": API,
        "id": "892193368",
        "predicate": "messageEntityMentionName",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}, {
            "name": "user_id",
            "type": "int"
        }],
        "type": "MessageEntity"
    }, {
        "@": API,
        "id": "546203849",
        "predicate": "inputMessageEntityMentionName",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}, {
            "name": "user_id",
            "type": "InputUser"
        }],
        "type": "MessageEntity"
    }, {
        "@": API,
        "id": "975236280",
        "predicate": "inputMessagesFilterChatPhotos",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "@": API,
        "id": "634833351",
        "predicate": "updateReadChannelOutbox",
        "params": [{"name": "channel_id", "type": "int"}, {"name": "max_id", "type": "int"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-299124375",
        "predicate": "updateDraftMessage",
        "params": [{"name": "peer", "type": "Peer"}, {"name": "draft", "type": "DraftMessage"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "453805082",
        "predicate": "draftMessageEmpty",
        "params": [{"name": "flags", "type": "#"}, {"name": "date", "type": "flags.0?int"}],
        "type": "DraftMessage"
    }, {
        "@": API,
        "id": "-40996577",
        "predicate": "draftMessage",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "no_webpage",
            "type": "flags.1?true"
        }, {"name": "reply_to_msg_id", "type": "flags.0?int"}, {
            "name": "message",
            "type": "string"
        }, {"name": "entities", "type": "flags.3?Vector<MessageEntity>"}, {"name": "date", "type": "int"}],
        "type": "DraftMessage"
    }, {
        "@": API,
        "id": "-1615153660",
        "predicate": "messageActionHistoryClear",
        "params": [],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "-958657434",
        "predicate": "messages.featuredStickersNotModified",
        "params": [{"name": "count", "type": "int"}],
        "type": "messages.FeaturedStickers"
    }, {
        "@": API,
        "id": "-1230257343",
        "predicate": "messages.featuredStickers",
        "params": [{"name": "hash", "type": "int"}, {"name": "count", "type": "int"}, {
            "name": "sets",
            "type": "Vector<StickerSetCovered>"
        }, {"name": "unread", "type": "Vector<long>"}],
        "type": "messages.FeaturedStickers"
    }, {
        "@": API,
        "id": "1461528386",
        "predicate": "updateReadFeaturedStickers",
        "params": [],
        "type": "Update"
    }, {
        "@": API,
        "id": "186120336",
        "predicate": "messages.recentStickersNotModified",
        "params": [],
        "type": "messages.RecentStickers"
    }, {
        "@": API,
        "id": "586395571",
        "predicate": "messages.recentStickers",
        "params": [{"name": "hash", "type": "int"}, {
            "name": "packs",
            "type": "Vector<StickerPack>"
        }, {"name": "stickers", "type": "Vector<Document>"}, {"name": "dates", "type": "Vector<int>"}],
        "type": "messages.RecentStickers"
    }, {"id": "-1706939360", "predicate": "updateRecentStickers", "params": [], "type": "Update"}, {
        "@": API,
        "id": "1338747336",
        "predicate": "messages.archivedStickers",
        "params": [{"name": "count", "type": "int"}, {"name": "sets", "type": "Vector<StickerSetCovered>"}],
        "type": "messages.ArchivedStickers"
    }, {
        "@": API,
        "id": "946083368",
        "predicate": "messages.stickerSetInstallResultSuccess",
        "params": [],
        "type": "messages.StickerSetInstallResult"
    }, {
        "@": API,
        "id": "904138920",
        "predicate": "messages.stickerSetInstallResultArchive",
        "params": [{"name": "sets", "type": "Vector<StickerSetCovered>"}],
        "type": "messages.StickerSetInstallResult"
    }, {
        "@": API,
        "id": "1678812626",
        "predicate": "stickerSetCovered",
        "params": [{"name": "set", "type": "StickerSet"}, {"name": "cover", "type": "Document"}],
        "type": "StickerSetCovered"
    }, {"id": "-1574314746", "predicate": "updateConfig", "params": [], "type": "Update"}, {
        "@": API,
        "id": "861169551",
        "predicate": "updatePtsChanged",
        "params": [],
        "type": "Update"
    }, {
        "@": API,
        "id": "-440664550",
        "predicate": "inputMediaPhotoExternal",
        "params": [{"name": "flags", "type": "#"}, {"name": "url", "type": "string"}, {
            "name": "ttl_seconds",
            "type": "flags.0?int"
        }],
        "type": "InputMedia"
    }, {
        "@": API,
        "id": "-78455655",
        "predicate": "inputMediaDocumentExternal",
        "params": [{"name": "flags", "type": "#"}, {"name": "url", "type": "string"}, {
            "name": "ttl_seconds",
            "type": "flags.0?int"
        }],
        "type": "InputMedia"
    }, {
        "@": API,
        "id": "872932635",
        "predicate": "stickerSetMultiCovered",
        "params": [{"name": "set", "type": "StickerSet"}, {"name": "covers", "type": "Vector<Document>"}],
        "type": "StickerSetCovered"
    }, {
        "@": API,
        "id": "-1361650766",
        "predicate": "maskCoords",
        "params": [{"name": "n", "type": "int"}, {"name": "x", "type": "double"}, {
            "name": "y",
            "type": "double"
        }, {"name": "zoom", "type": "double"}],
        "type": "MaskCoords"
    }, {
        "@": API,
        "id": "-1744710921",
        "predicate": "documentAttributeHasStickers",
        "params": [],
        "type": "DocumentAttribute"
    }, {
        "@": API,
        "id": "1251549527",
        "predicate": "inputStickeredMediaPhoto",
        "params": [{"name": "id", "type": "InputPhoto"}],
        "type": "InputStickeredMedia"
    }, {
        "@": API,
        "id": "70813275",
        "predicate": "inputStickeredMediaDocument",
        "params": [{"name": "id", "type": "InputDocument"}],
        "type": "InputStickeredMedia"
    }, {
        "@": API,
        "id": "-1107729093",
        "predicate": "game",
        "params": [{"name": "flags", "type": "#"}, {"name": "id", "type": "long"}, {
            "name": "access_hash",
            "type": "long"
        }, {"name": "short_name", "type": "string"}, {"name": "title", "type": "string"}, {
            "name": "description",
            "type": "string"
        }, {"name": "photo", "type": "Photo"}, {"name": "document", "type": "flags.0?Document"}],
        "type": "Game"
    }, {
        "@": API,
        "id": "1336154098",
        "predicate": "inputBotInlineResultGame",
        "params": [{"name": "id", "type": "string"}, {"name": "short_name", "type": "string"}, {
            "name": "send_message",
            "type": "InputBotInlineMessage"
        }],
        "type": "InputBotInlineResult"
    }, {
        "@": API,
        "id": "1262639204",
        "predicate": "inputBotInlineMessageGame",
        "params": [{"name": "flags", "type": "#"}, {"name": "reply_markup", "type": "flags.2?ReplyMarkup"}],
        "type": "InputBotInlineMessage"
    }, {
        "@": API,
        "id": "-38694904",
        "predicate": "messageMediaGame",
        "params": [{"name": "game", "type": "Game"}],
        "type": "MessageMedia"
    }, {
        "@": API,
        "id": "-750828557",
        "predicate": "inputMediaGame",
        "params": [{"name": "id", "type": "InputGame"}],
        "type": "InputMedia"
    }, {
        "@": API,
        "id": "53231223",
        "predicate": "inputGameID",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}],
        "type": "InputGame"
    }, {
        "@": API,
        "id": "-1020139510",
        "predicate": "inputGameShortName",
        "params": [{"name": "bot_id", "type": "InputUser"}, {"name": "short_name", "type": "string"}],
        "type": "InputGame"
    }, {
        "@": API,
        "id": "1358175439",
        "predicate": "keyboardButtonGame",
        "params": [{"name": "text", "type": "string"}],
        "type": "KeyboardButton"
    }, {
        "@": API,
        "id": "-1834538890",
        "predicate": "messageActionGameScore",
        "params": [{"name": "game_id", "type": "long"}, {"name": "score", "type": "int"}],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "1493171408",
        "predicate": "highScore",
        "params": [{"name": "pos", "type": "int"}, {"name": "user_id", "type": "int"}, {
            "name": "score",
            "type": "int"
        }],
        "type": "HighScore"
    }, {
        "@": API,
        "id": "-1707344487",
        "predicate": "messages.highScores",
        "params": [{"name": "scores", "type": "Vector<HighScore>"}, {"name": "users", "type": "Vector<User>"}],
        "type": "messages.HighScores"
    }, {
        "@": API,
        "id": "1258196845",
        "predicate": "updates.differenceTooLong",
        "params": [{"name": "pts", "type": "int"}],
        "type": "updates.Difference"
    }, {
        "@": API,
        "id": "1081547008",
        "predicate": "updateChannelWebPage",
        "params": [{"name": "channel_id", "type": "int"}, {"name": "webpage", "type": "WebPage"}, {
            "name": "pts",
            "type": "int"
        }, {"name": "pts_count", "type": "int"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1663561404",
        "predicate": "messages.chatsSlice",
        "params": [{"name": "count", "type": "int"}, {"name": "chats", "type": "Vector<Chat>"}],
        "type": "messages.Chats"
    }, {"id": "-599948721", "predicate": "textEmpty", "params": [], "type": "RichText"}, {
        "@": API,
        "id": "1950782688",
        "predicate": "textPlain",
        "params": [{"name": "text", "type": "string"}],
        "type": "RichText"
    }, {
        "@": API,
        "id": "1730456516",
        "predicate": "textBold",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "RichText"
    }, {
        "@": API,
        "id": "-653089380",
        "predicate": "textItalic",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "RichText"
    }, {
        "@": API,
        "id": "-1054465340",
        "predicate": "textUnderline",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "RichText"
    }, {
        "@": API,
        "id": "-1678197867",
        "predicate": "textStrike",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "RichText"
    }, {
        "@": API,
        "id": "1816074681",
        "predicate": "textFixed",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "RichText"
    }, {
        "@": API,
        "id": "1009288385",
        "predicate": "textUrl",
        "params": [{"name": "text", "type": "RichText"}, {"name": "url", "type": "string"}, {
            "name": "webpage_id",
            "type": "long"
        }],
        "type": "RichText"
    }, {
        "@": API,
        "id": "-564523562",
        "predicate": "textEmail",
        "params": [{"name": "text", "type": "RichText"}, {"name": "email", "type": "string"}],
        "type": "RichText"
    }, {
        "@": API,
        "id": "2120376535",
        "predicate": "textConcat",
        "params": [{"name": "texts", "type": "Vector<RichText>"}],
        "type": "RichText"
    }, {"id": "324435594", "predicate": "pageBlockUnsupported", "params": [], "type": "PageBlock"}, {
        "@": API,
        "id": "1890305021",
        "predicate": "pageBlockTitle",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "-1879401953",
        "predicate": "pageBlockSubtitle",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "-1162877472",
        "predicate": "pageBlockAuthorDate",
        "params": [{"name": "author", "type": "RichText"}, {"name": "published_date", "type": "int"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "-1076861716",
        "predicate": "pageBlockHeader",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "-248793375",
        "predicate": "pageBlockSubheader",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "1182402406",
        "predicate": "pageBlockParagraph",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "-1066346178",
        "predicate": "pageBlockPreformatted",
        "params": [{"name": "text", "type": "RichText"}, {"name": "language", "type": "string"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "1216809369",
        "predicate": "pageBlockFooter",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "PageBlock"
    }, {"id": "-618614392", "predicate": "pageBlockDivider", "params": [], "type": "PageBlock"}, {
        "@": API,
        "id": "-837994576",
        "predicate": "pageBlockAnchor",
        "params": [{"name": "name", "type": "string"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "-454524911",
        "predicate": "pageBlockList",
        "params": [{"name": "items", "type": "Vector<PageListItem>"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "641563686",
        "predicate": "pageBlockBlockquote",
        "params": [{"name": "text", "type": "RichText"}, {"name": "caption", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "1329878739",
        "predicate": "pageBlockPullquote",
        "params": [{"name": "text", "type": "RichText"}, {"name": "caption", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "391759200",
        "predicate": "pageBlockPhoto",
        "params": [{"name": "flags", "type": "#"}, {"name": "photo_id", "type": "long"}, {
            "name": "caption",
            "type": "PageCaption"
        }, {"name": "url", "type": "flags.0?string"}, {"name": "webpage_id", "type": "flags.0?long"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "2089805750",
        "predicate": "pageBlockVideo",
        "params": [{"name": "flags", "type": "#"}, {"name": "autoplay", "type": "flags.0?true"}, {
            "name": "loop",
            "type": "flags.1?true"
        }, {"name": "video_id", "type": "long"}, {"name": "caption", "type": "PageCaption"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "972174080",
        "predicate": "pageBlockCover",
        "params": [{"name": "cover", "type": "PageBlock"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "-1468953147",
        "predicate": "pageBlockEmbed",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "full_width",
            "type": "flags.0?true"
        }, {"name": "allow_scrolling", "type": "flags.3?true"}, {
            "name": "url",
            "type": "flags.1?string"
        }, {"name": "html", "type": "flags.2?string"}, {
            "name": "poster_photo_id",
            "type": "flags.4?long"
        }, {"name": "w", "type": "flags.5?int"}, {"name": "h", "type": "flags.5?int"}, {
            "name": "caption",
            "type": "PageCaption"
        }],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "-229005301",
        "predicate": "pageBlockEmbedPost",
        "params": [{"name": "url", "type": "string"}, {
            "name": "webpage_id",
            "type": "long"
        }, {"name": "author_photo_id", "type": "long"}, {"name": "author", "type": "string"}, {
            "name": "date",
            "type": "int"
        }, {"name": "blocks", "type": "Vector<PageBlock>"}, {"name": "caption", "type": "PageCaption"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "1705048653",
        "predicate": "pageBlockCollage",
        "params": [{"name": "items", "type": "Vector<PageBlock>"}, {"name": "caption", "type": "PageCaption"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "52401552",
        "predicate": "pageBlockSlideshow",
        "params": [{"name": "items", "type": "Vector<PageBlock>"}, {"name": "caption", "type": "PageCaption"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "1930545681",
        "predicate": "webPageNotModified",
        "params": [{"name": "flags", "type": "#"}, {"name": "cached_page_views", "type": "flags.0?int"}],
        "type": "WebPage"
    }, {
        "@": API,
        "id": "-88417185",
        "predicate": "inputPrivacyKeyPhoneCall",
        "params": [],
        "type": "InputPrivacyKey"
    }, {
        "@": API,
        "id": "1030105979",
        "predicate": "privacyKeyPhoneCall",
        "params": [],
        "type": "PrivacyKey"
    }, {
        "@": API,
        "id": "-580219064",
        "predicate": "sendMessageGamePlayAction",
        "params": [],
        "type": "SendMessageAction"
    }, {
        "@": API,
        "id": "-2048646399",
        "predicate": "phoneCallDiscardReasonMissed",
        "params": [],
        "type": "PhoneCallDiscardReason"
    }, {
        "@": API,
        "id": "-527056480",
        "predicate": "phoneCallDiscardReasonDisconnect",
        "params": [],
        "type": "PhoneCallDiscardReason"
    }, {
        "@": API,
        "id": "1471006352",
        "predicate": "phoneCallDiscardReasonHangup",
        "params": [],
        "type": "PhoneCallDiscardReason"
    }, {
        "@": API,
        "id": "-84416311",
        "predicate": "phoneCallDiscardReasonBusy",
        "params": [],
        "type": "PhoneCallDiscardReason"
    }, {
        "@": API,
        "id": "1852826908",
        "predicate": "updateDialogPinned",
        "params": [{"name": "flags", "type": "#"}, {"name": "pinned", "type": "flags.0?true"}, {
            "name": "folder_id",
            "type": "flags.1?int"
        }, {"name": "peer", "type": "DialogPeer"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-99664734",
        "predicate": "updatePinnedDialogs",
        "params": [{"name": "flags", "type": "#"}, {"name": "folder_id", "type": "flags.1?int"}, {
            "name": "order",
            "type": "flags.0?Vector<DialogPeer>"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "2104790276",
        "predicate": "dataJSON",
        "params": [{"name": "data", "type": "string"}],
        "type": "DataJSON"
    }, {
        "@": API,
        "id": "-2095595325",
        "predicate": "updateBotWebhookJSON",
        "params": [{"name": "data", "type": "DataJSON"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1684914010",
        "predicate": "updateBotWebhookJSONQuery",
        "params": [{"name": "query_id", "type": "long"}, {"name": "data", "type": "DataJSON"}, {
            "name": "timeout",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "-886477832",
        "predicate": "labeledPrice",
        "params": [{"name": "label", "type": "string"}, {"name": "amount", "type": "long"}],
        "type": "LabeledPrice"
    }, {
        "@": API,
        "id": "-1022713000",
        "predicate": "invoice",
        "params": [{"name": "flags", "type": "#"}, {"name": "test", "type": "flags.0?true"}, {
            "name": "name_requested",
            "type": "flags.1?true"
        }, {"name": "phone_requested", "type": "flags.2?true"}, {
            "name": "email_requested",
            "type": "flags.3?true"
        }, {"name": "shipping_address_requested", "type": "flags.4?true"}, {
            "name": "flexible",
            "type": "flags.5?true"
        }, {"name": "phone_to_provider", "type": "flags.6?true"}, {
            "name": "email_to_provider",
            "type": "flags.7?true"
        }, {"name": "currency", "type": "string"}, {"name": "prices", "type": "Vector<LabeledPrice>"}],
        "type": "Invoice"
    }, {
        "@": API,
        "id": "-186607933",
        "predicate": "inputMediaInvoice",
        "params": [{"name": "flags", "type": "#"}, {"name": "title", "type": "string"}, {
            "name": "description",
            "type": "string"
        }, {"name": "photo", "type": "flags.0?InputWebDocument"}, {
            "name": "invoice",
            "type": "Invoice"
        }, {"name": "payload", "type": "bytes"}, {"name": "provider", "type": "string"}, {
            "name": "provider_data",
            "type": "DataJSON"
        }, {"name": "start_param", "type": "string"}],
        "type": "InputMedia"
    }, {
        "@": API,
        "id": "-368917890",
        "predicate": "paymentCharge",
        "params": [{"name": "id", "type": "string"}, {"name": "provider_charge_id", "type": "string"}],
        "type": "PaymentCharge"
    }, {
        "@": API,
        "id": "-1892568281",
        "predicate": "messageActionPaymentSentMe",
        "params": [{"name": "flags", "type": "#"}, {"name": "currency", "type": "string"}, {
            "name": "total_amount",
            "type": "long"
        }, {"name": "payload", "type": "bytes"}, {
            "name": "info",
            "type": "flags.0?PaymentRequestedInfo"
        }, {"name": "shipping_option_id", "type": "flags.1?string"}, {"name": "charge", "type": "PaymentCharge"}],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "-2074799289",
        "predicate": "messageMediaInvoice",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "shipping_address_requested",
            "type": "flags.1?true"
        }, {"name": "test", "type": "flags.3?true"}, {"name": "title", "type": "string"}, {
            "name": "description",
            "type": "string"
        }, {"name": "photo", "type": "flags.0?WebDocument"}, {
            "name": "receipt_msg_id",
            "type": "flags.2?int"
        }, {"name": "currency", "type": "string"}, {"name": "total_amount", "type": "long"}, {
            "name": "start_param",
            "type": "string"
        }],
        "type": "MessageMedia"
    }, {
        "@": API,
        "id": "512535275",
        "predicate": "postAddress",
        "params": [{"name": "street_line1", "type": "string"}, {
            "name": "street_line2",
            "type": "string"
        }, {"name": "city", "type": "string"}, {"name": "state", "type": "string"}, {
            "name": "country_iso2",
            "type": "string"
        }, {"name": "post_code", "type": "string"}],
        "type": "PostAddress"
    }, {
        "@": API,
        "id": "-1868808300",
        "predicate": "paymentRequestedInfo",
        "params": [{"name": "flags", "type": "#"}, {"name": "name", "type": "flags.0?string"}, {
            "name": "phone",
            "type": "flags.1?string"
        }, {"name": "email", "type": "flags.2?string"}, {"name": "shipping_address", "type": "flags.3?PostAddress"}],
        "type": "PaymentRequestedInfo"
    }, {
        "@": API,
        "id": "-1344716869",
        "predicate": "keyboardButtonBuy",
        "params": [{"name": "text", "type": "string"}],
        "type": "KeyboardButton"
    }, {
        "@": API,
        "id": "1080663248",
        "predicate": "messageActionPaymentSent",
        "params": [{"name": "currency", "type": "string"}, {"name": "total_amount", "type": "long"}],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "-842892769",
        "predicate": "paymentSavedCredentialsCard",
        "params": [{"name": "id", "type": "string"}, {"name": "title", "type": "string"}],
        "type": "PaymentSavedCredentials"
    }, {
        "@": API,
        "id": "475467473",
        "predicate": "webDocument",
        "params": [{"name": "url", "type": "string"}, {"name": "access_hash", "type": "long"}, {
            "name": "size",
            "type": "int"
        }, {"name": "mime_type", "type": "string"}, {"name": "attributes", "type": "Vector<DocumentAttribute>"}],
        "type": "WebDocument"
    }, {
        "@": API,
        "id": "-1678949555",
        "predicate": "inputWebDocument",
        "params": [{"name": "url", "type": "string"}, {"name": "size", "type": "int"}, {
            "name": "mime_type",
            "type": "string"
        }, {"name": "attributes", "type": "Vector<DocumentAttribute>"}],
        "type": "InputWebDocument"
    }, {
        "@": API,
        "id": "-1036396922",
        "predicate": "inputWebFileLocation",
        "params": [{"name": "url", "type": "string"}, {"name": "access_hash", "type": "long"}],
        "type": "InputWebFileLocation"
    }, {
        "@": API,
        "id": "568808380",
        "predicate": "upload.webFile",
        "params": [{"name": "size", "type": "int"}, {"name": "mime_type", "type": "string"}, {
            "name": "file_type",
            "type": "storage.FileType"
        }, {"name": "mtime", "type": "int"}, {"name": "bytes", "type": "bytes"}],
        "type": "upload.WebFile"
    }, {
        "@": API,
        "id": "1062645411",
        "predicate": "payments.paymentForm",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "can_save_credentials",
            "type": "flags.2?true"
        }, {"name": "password_missing", "type": "flags.3?true"}, {"name": "bot_id", "type": "int"}, {
            "name": "invoice",
            "type": "Invoice"
        }, {"name": "provider_id", "type": "int"}, {"name": "url", "type": "string"}, {
            "name": "native_provider",
            "type": "flags.4?string"
        }, {"name": "native_params", "type": "flags.4?DataJSON"}, {
            "name": "saved_info",
            "type": "flags.0?PaymentRequestedInfo"
        }, {"name": "saved_credentials", "type": "flags.1?PaymentSavedCredentials"}, {
            "name": "users",
            "type": "Vector<User>"
        }],
        "type": "payments.PaymentForm"
    }, {
        "@": API,
        "id": "-784000893",
        "predicate": "payments.validatedRequestedInfo",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "id",
            "type": "flags.0?string"
        }, {"name": "shipping_options", "type": "flags.1?Vector<ShippingOption>"}],
        "type": "payments.ValidatedRequestedInfo"
    }, {
        "@": API,
        "id": "1314881805",
        "predicate": "payments.paymentResult",
        "params": [{"name": "updates", "type": "Updates"}],
        "type": "payments.PaymentResult"
    }, {
        "@": API,
        "id": "1342771681",
        "predicate": "payments.paymentReceipt",
        "params": [{"name": "flags", "type": "#"}, {"name": "date", "type": "int"}, {
            "name": "bot_id",
            "type": "int"
        }, {"name": "invoice", "type": "Invoice"}, {"name": "provider_id", "type": "int"}, {
            "name": "info",
            "type": "flags.0?PaymentRequestedInfo"
        }, {"name": "shipping", "type": "flags.1?ShippingOption"}, {
            "name": "currency",
            "type": "string"
        }, {"name": "total_amount", "type": "long"}, {"name": "credentials_title", "type": "string"}, {
            "name": "users",
            "type": "Vector<User>"
        }],
        "type": "payments.PaymentReceipt"
    }, {
        "@": API,
        "id": "-74456004",
        "predicate": "payments.savedInfo",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "has_saved_credentials",
            "type": "flags.1?true"
        }, {"name": "saved_info", "type": "flags.0?PaymentRequestedInfo"}],
        "type": "payments.SavedInfo"
    }, {
        "@": API,
        "id": "-1056001329",
        "predicate": "inputPaymentCredentialsSaved",
        "params": [{"name": "id", "type": "string"}, {"name": "tmp_password", "type": "bytes"}],
        "type": "InputPaymentCredentials"
    }, {
        "@": API,
        "id": "873977640",
        "predicate": "inputPaymentCredentials",
        "params": [{"name": "flags", "type": "#"}, {"name": "save", "type": "flags.0?true"}, {
            "name": "data",
            "type": "DataJSON"
        }],
        "type": "InputPaymentCredentials"
    }, {
        "@": API,
        "id": "-614138572",
        "predicate": "account.tmpPassword",
        "params": [{"name": "tmp_password", "type": "bytes"}, {"name": "valid_until", "type": "int"}],
        "type": "account.TmpPassword"
    }, {
        "@": API,
        "id": "-1239335713",
        "predicate": "shippingOption",
        "params": [{"name": "id", "type": "string"}, {"name": "title", "type": "string"}, {
            "name": "prices",
            "type": "Vector<LabeledPrice>"
        }],
        "type": "ShippingOption"
    }, {
        "@": API,
        "id": "-523384512",
        "predicate": "updateBotShippingQuery",
        "params": [{"name": "query_id", "type": "long"}, {"name": "user_id", "type": "int"}, {
            "name": "payload",
            "type": "bytes"
        }, {"name": "shipping_address", "type": "PostAddress"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "1563376297",
        "predicate": "updateBotPrecheckoutQuery",
        "params": [{"name": "flags", "type": "#"}, {"name": "query_id", "type": "long"}, {
            "name": "user_id",
            "type": "int"
        }, {"name": "payload", "type": "bytes"}, {
            "name": "info",
            "type": "flags.0?PaymentRequestedInfo"
        }, {"name": "shipping_option_id", "type": "flags.1?string"}, {
            "name": "currency",
            "type": "string"
        }, {"name": "total_amount", "type": "long"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-6249322",
        "predicate": "inputStickerSetItem",
        "params": [{"name": "flags", "type": "#"}, {"name": "document", "type": "InputDocument"}, {
            "name": "emoji",
            "type": "string"
        }, {"name": "mask_coords", "type": "flags.0?MaskCoords"}],
        "type": "InputStickerSetItem"
    }, {
        "@": API,
        "id": "-1425052898",
        "predicate": "updatePhoneCall",
        "params": [{"name": "phone_call", "type": "PhoneCall"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "506920429",
        "predicate": "inputPhoneCall",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}],
        "type": "InputPhoneCall"
    }, {
        "@": API,
        "id": "1399245077",
        "predicate": "phoneCallEmpty",
        "params": [{"name": "id", "type": "long"}],
        "type": "PhoneCall"
    }, {
        "@": API,
        "id": "462375633",
        "predicate": "phoneCallWaiting",
        "params": [{"name": "flags", "type": "#"}, {"name": "video", "type": "flags.6?true"}, {
            "name": "id",
            "type": "long"
        }, {"name": "access_hash", "type": "long"}, {"name": "date", "type": "int"}, {
            "name": "admin_id",
            "type": "int"
        }, {"name": "participant_id", "type": "int"}, {
            "name": "protocol",
            "type": "PhoneCallProtocol"
        }, {"name": "receive_date", "type": "flags.0?int"}],
        "type": "PhoneCall"
    }, {
        "@": API,
        "id": "-2014659757",
        "predicate": "phoneCallRequested",
        "params": [{"name": "flags", "type": "#"}, {"name": "video", "type": "flags.6?true"}, {
            "name": "id",
            "type": "long"
        }, {"name": "access_hash", "type": "long"}, {"name": "date", "type": "int"}, {
            "name": "admin_id",
            "type": "int"
        }, {"name": "participant_id", "type": "int"}, {"name": "g_a_hash", "type": "bytes"}, {
            "name": "protocol",
            "type": "PhoneCallProtocol"
        }],
        "type": "PhoneCall"
    }, {
        "@": API,
        "id": "-1719909046",
        "predicate": "phoneCallAccepted",
        "params": [{"name": "flags", "type": "#"}, {"name": "video", "type": "flags.6?true"}, {
            "name": "id",
            "type": "long"
        }, {"name": "access_hash", "type": "long"}, {"name": "date", "type": "int"}, {
            "name": "admin_id",
            "type": "int"
        }, {"name": "participant_id", "type": "int"}, {"name": "g_b", "type": "bytes"}, {
            "name": "protocol",
            "type": "PhoneCallProtocol"
        }],
        "type": "PhoneCall"
    }, {
        "@": API,
        "id": "-2025673089",
        "predicate": "phoneCall",
        "params": [{"name": "flags", "type": "#"}, {"name": "p2p_allowed", "type": "flags.5?true"}, {
            "name": "video",
            "type": "flags.6?true"
        }, {"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}, {
            "name": "date",
            "type": "int"
        }, {"name": "admin_id", "type": "int"}, {"name": "participant_id", "type": "int"}, {
            "name": "g_a_or_b",
            "type": "bytes"
        }, {"name": "key_fingerprint", "type": "long"}, {
            "name": "protocol",
            "type": "PhoneCallProtocol"
        }, {"name": "connections", "type": "Vector<PhoneConnection>"}, {"name": "start_date", "type": "int"}],
        "type": "PhoneCall"
    }, {
        "@": API,
        "id": "1355435489",
        "predicate": "phoneCallDiscarded",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "need_rating",
            "type": "flags.2?true"
        }, {"name": "need_debug", "type": "flags.3?true"}, {"name": "video", "type": "flags.6?true"}, {
            "name": "id",
            "type": "long"
        }, {"name": "reason", "type": "flags.0?PhoneCallDiscardReason"}, {"name": "duration", "type": "flags.1?int"}],
        "type": "PhoneCall"
    }, {
        "@": API,
        "id": "-1655957568",
        "predicate": "phoneConnection",
        "params": [{"name": "id", "type": "long"}, {"name": "ip", "type": "string"}, {
            "name": "ipv6",
            "type": "string"
        }, {"name": "port", "type": "int"}, {"name": "peer_tag", "type": "bytes"}],
        "type": "PhoneConnection"
    }, {
        "@": API,
        "id": "-58224696",
        "predicate": "phoneCallProtocol",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "udp_p2p",
            "type": "flags.0?true"
        }, {"name": "udp_reflector", "type": "flags.1?true"}, {
            "name": "min_layer",
            "type": "int"
        }, {"name": "max_layer", "type": "int"}, {"name": "library_versions", "type": "Vector<string>"}],
        "type": "PhoneCallProtocol"
    }, {
        "@": API,
        "id": "-326966976",
        "predicate": "phone.phoneCall",
        "params": [{"name": "phone_call", "type": "PhoneCall"}, {"name": "users", "type": "Vector<User>"}],
        "type": "phone.PhoneCall"
    }, {
        "@": API,
        "id": "-2134272152",
        "predicate": "inputMessagesFilterPhoneCalls",
        "params": [{"name": "flags", "type": "#"}, {"name": "missed", "type": "flags.0?true"}],
        "type": "MessagesFilter"
    }, {
        "@": API,
        "id": "-2132731265",
        "predicate": "messageActionPhoneCall",
        "params": [{"name": "flags", "type": "#"}, {"name": "video", "type": "flags.2?true"}, {
            "name": "call_id",
            "type": "long"
        }, {"name": "reason", "type": "flags.0?PhoneCallDiscardReason"}, {"name": "duration", "type": "flags.1?int"}],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "2054952868",
        "predicate": "inputMessagesFilterRoundVoice",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "@": API,
        "id": "-1253451181",
        "predicate": "inputMessagesFilterRoundVideo",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "@": API,
        "id": "-1997373508",
        "predicate": "sendMessageRecordRoundAction",
        "params": [],
        "type": "SendMessageAction"
    }, {
        "@": API,
        "id": "608050278",
        "predicate": "sendMessageUploadRoundAction",
        "params": [{"name": "progress", "type": "int"}],
        "type": "SendMessageAction"
    }, {
        "@": API,
        "id": "-242427324",
        "predicate": "upload.fileCdnRedirect",
        "params": [{"name": "dc_id", "type": "int"}, {"name": "file_token", "type": "bytes"}, {
            "name": "encryption_key",
            "type": "bytes"
        }, {"name": "encryption_iv", "type": "bytes"}, {"name": "file_hashes", "type": "Vector<FileHash>"}],
        "type": "upload.File"
    }, {
        "@": API,
        "id": "-290921362",
        "predicate": "upload.cdnFileReuploadNeeded",
        "params": [{"name": "request_token", "type": "bytes"}],
        "type": "upload.CdnFile"
    }, {
        "@": API,
        "id": "-1449145777",
        "predicate": "upload.cdnFile",
        "params": [{"name": "bytes", "type": "bytes"}],
        "type": "upload.CdnFile"
    }, {
        "@": API,
        "id": "-914167110",
        "predicate": "cdnPublicKey",
        "params": [{"name": "dc_id", "type": "int"}, {"name": "public_key", "type": "string"}],
        "type": "CdnPublicKey"
    }, {
        "@": API,
        "id": "1462101002",
        "predicate": "cdnConfig",
        "params": [{"name": "public_keys", "type": "Vector<CdnPublicKey>"}],
        "type": "CdnConfig"
    }, {
        "@": API,
        "id": "-283684427",
        "predicate": "pageBlockChannel",
        "params": [{"name": "channel", "type": "Chat"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "-892239370",
        "predicate": "langPackString",
        "params": [{"name": "key", "type": "string"}, {"name": "value", "type": "string"}],
        "type": "LangPackString"
    }, {
        "@": API,
        "id": "1816636575",
        "predicate": "langPackStringPluralized",
        "params": [{"name": "flags", "type": "#"}, {"name": "key", "type": "string"}, {
            "name": "zero_value",
            "type": "flags.0?string"
        }, {"name": "one_value", "type": "flags.1?string"}, {
            "name": "two_value",
            "type": "flags.2?string"
        }, {"name": "few_value", "type": "flags.3?string"}, {
            "name": "many_value",
            "type": "flags.4?string"
        }, {"name": "other_value", "type": "string"}],
        "type": "LangPackString"
    }, {
        "@": API,
        "id": "695856818",
        "predicate": "langPackStringDeleted",
        "params": [{"name": "key", "type": "string"}],
        "type": "LangPackString"
    }, {
        "@": API,
        "id": "-209337866",
        "predicate": "langPackDifference",
        "params": [{"name": "lang_code", "type": "string"}, {"name": "from_version", "type": "int"}, {
            "name": "version",
            "type": "int"
        }, {"name": "strings", "type": "Vector<LangPackString>"}],
        "type": "LangPackDifference"
    }, {
        "@": API,
        "id": "-288727837",
        "predicate": "langPackLanguage",
        "params": [{"name": "flags", "type": "#"}, {"name": "official", "type": "flags.0?true"}, {
            "name": "rtl",
            "type": "flags.2?true"
        }, {"name": "beta", "type": "flags.3?true"}, {"name": "name", "type": "string"}, {
            "name": "native_name",
            "type": "string"
        }, {"name": "lang_code", "type": "string"}, {
            "name": "base_lang_code",
            "type": "flags.1?string"
        }, {"name": "plural_code", "type": "string"}, {
            "name": "strings_count",
            "type": "int"
        }, {"name": "translated_count", "type": "int"}, {"name": "translations_url", "type": "string"}],
        "type": "LangPackLanguage"
    }, {
        "@": API,
        "id": "1180041828",
        "predicate": "updateLangPackTooLong",
        "params": [{"name": "lang_code", "type": "string"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "1442983757",
        "predicate": "updateLangPack",
        "params": [{"name": "difference", "type": "LangPackDifference"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-859915345",
        "predicate": "channelParticipantAdmin",
        "params": [{"name": "flags", "type": "#"}, {"name": "can_edit", "type": "flags.0?true"}, {
            "name": "self",
            "type": "flags.1?true"
        }, {"name": "user_id", "type": "int"}, {"name": "inviter_id", "type": "flags.1?int"}, {
            "name": "promoted_by",
            "type": "int"
        }, {"name": "date", "type": "int"}, {"name": "admin_rights", "type": "ChatAdminRights"}, {
            "name": "rank",
            "type": "flags.2?string"
        }],
        "type": "ChannelParticipant"
    }, {
        "@": API,
        "id": "470789295",
        "predicate": "channelParticipantBanned",
        "params": [{"name": "flags", "type": "#"}, {"name": "left", "type": "flags.0?true"}, {
            "name": "user_id",
            "type": "int"
        }, {"name": "kicked_by", "type": "int"}, {"name": "date", "type": "int"}, {
            "name": "banned_rights",
            "type": "ChatBannedRights"
        }],
        "type": "ChannelParticipant"
    }, {
        "@": API,
        "id": "338142689",
        "predicate": "channelParticipantsBanned",
        "params": [{"name": "q", "type": "string"}],
        "type": "ChannelParticipantsFilter"
    }, {
        "@": API,
        "id": "106343499",
        "predicate": "channelParticipantsSearch",
        "params": [{"name": "q", "type": "string"}],
        "type": "ChannelParticipantsFilter"
    }, {
        "@": API,
        "id": "-421545947",
        "predicate": "channelAdminLogEventActionChangeTitle",
        "params": [{"name": "prev_value", "type": "string"}, {"name": "new_value", "type": "string"}],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "1427671598",
        "predicate": "channelAdminLogEventActionChangeAbout",
        "params": [{"name": "prev_value", "type": "string"}, {"name": "new_value", "type": "string"}],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "1783299128",
        "predicate": "channelAdminLogEventActionChangeUsername",
        "params": [{"name": "prev_value", "type": "string"}, {"name": "new_value", "type": "string"}],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "1129042607",
        "predicate": "channelAdminLogEventActionChangePhoto",
        "params": [{"name": "prev_photo", "type": "Photo"}, {"name": "new_photo", "type": "Photo"}],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "460916654",
        "predicate": "channelAdminLogEventActionToggleInvites",
        "params": [{"name": "new_value", "type": "Bool"}],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "648939889",
        "predicate": "channelAdminLogEventActionToggleSignatures",
        "params": [{"name": "new_value", "type": "Bool"}],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "-370660328",
        "predicate": "channelAdminLogEventActionUpdatePinned",
        "params": [{"name": "message", "type": "Message"}],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "1889215493",
        "predicate": "channelAdminLogEventActionEditMessage",
        "params": [{"name": "prev_message", "type": "Message"}, {"name": "new_message", "type": "Message"}],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "1121994683",
        "predicate": "channelAdminLogEventActionDeleteMessage",
        "params": [{"name": "message", "type": "Message"}],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "405815507",
        "predicate": "channelAdminLogEventActionParticipantJoin",
        "params": [],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "-124291086",
        "predicate": "channelAdminLogEventActionParticipantLeave",
        "params": [],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "-484690728",
        "predicate": "channelAdminLogEventActionParticipantInvite",
        "params": [{"name": "participant", "type": "ChannelParticipant"}],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "-422036098",
        "predicate": "channelAdminLogEventActionParticipantToggleBan",
        "params": [{"name": "prev_participant", "type": "ChannelParticipant"}, {
            "name": "new_participant",
            "type": "ChannelParticipant"
        }],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "-714643696",
        "predicate": "channelAdminLogEventActionParticipantToggleAdmin",
        "params": [{"name": "prev_participant", "type": "ChannelParticipant"}, {
            "name": "new_participant",
            "type": "ChannelParticipant"
        }],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "995769920",
        "predicate": "channelAdminLogEvent",
        "params": [{"name": "id", "type": "long"}, {"name": "date", "type": "int"}, {
            "name": "user_id",
            "type": "int"
        }, {"name": "action", "type": "ChannelAdminLogEventAction"}],
        "type": "ChannelAdminLogEvent"
    }, {
        "@": API,
        "id": "-309659827",
        "predicate": "channels.adminLogResults",
        "params": [{"name": "events", "type": "Vector<ChannelAdminLogEvent>"}, {
            "name": "chats",
            "type": "Vector<Chat>"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "channels.AdminLogResults"
    }, {
        "@": API,
        "id": "-368018716",
        "predicate": "channelAdminLogEventsFilter",
        "params": [{"name": "flags", "type": "#"}, {"name": "join", "type": "flags.0?true"}, {
            "name": "leave",
            "type": "flags.1?true"
        }, {"name": "invite", "type": "flags.2?true"}, {"name": "ban", "type": "flags.3?true"}, {
            "name": "unban",
            "type": "flags.4?true"
        }, {"name": "kick", "type": "flags.5?true"}, {"name": "unkick", "type": "flags.6?true"}, {
            "name": "promote",
            "type": "flags.7?true"
        }, {"name": "demote", "type": "flags.8?true"}, {"name": "info", "type": "flags.9?true"}, {
            "name": "settings",
            "type": "flags.10?true"
        }, {"name": "pinned", "type": "flags.11?true"}, {"name": "edit", "type": "flags.12?true"}, {
            "name": "delete",
            "type": "flags.13?true"
        }],
        "type": "ChannelAdminLogEventsFilter"
    }, {
        "@": API,
        "id": "511092620",
        "predicate": "topPeerCategoryPhoneCalls",
        "params": [],
        "type": "TopPeerCategory"
    }, {
        "@": API,
        "id": "-2143067670",
        "predicate": "pageBlockAudio",
        "params": [{"name": "audio_id", "type": "long"}, {"name": "caption", "type": "PageCaption"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "1558266229",
        "predicate": "popularContact",
        "params": [{"name": "client_id", "type": "long"}, {"name": "importers", "type": "int"}],
        "type": "PopularContact"
    }, {
        "@": API,
        "id": "1200788123",
        "predicate": "messageActionScreenshotTaken",
        "params": [],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "-1634752813",
        "predicate": "messages.favedStickersNotModified",
        "params": [],
        "type": "messages.FavedStickers"
    }, {
        "@": API,
        "id": "-209768682",
        "predicate": "messages.favedStickers",
        "params": [{"name": "hash", "type": "int"}, {
            "name": "packs",
            "type": "Vector<StickerPack>"
        }, {"name": "stickers", "type": "Vector<Document>"}],
        "type": "messages.FavedStickers"
    }, {"id": "-451831443", "predicate": "updateFavedStickers", "params": [], "type": "Update"}, {
        "@": API,
        "id": "-1987495099",
        "predicate": "updateChannelReadMessagesContents",
        "params": [{"name": "channel_id", "type": "int"}, {"name": "messages", "type": "Vector<int>"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1040652646",
        "predicate": "inputMessagesFilterMyMentions",
        "params": [],
        "type": "MessagesFilter"
    }, {"id": "1887741886", "predicate": "updateContactsReset", "params": [], "type": "Update"}, {
        "@": API,
        "id": "-1312568665",
        "predicate": "channelAdminLogEventActionChangeStickerSet",
        "params": [{"name": "prev_stickerset", "type": "InputStickerSet"}, {
            "name": "new_stickerset",
            "type": "InputStickerSet"
        }],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "-85549226",
        "predicate": "messageActionCustomAction",
        "params": [{"name": "message", "type": "string"}],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "178373535",
        "predicate": "inputPaymentCredentialsApplePay",
        "params": [{"name": "payment_data", "type": "DataJSON"}],
        "type": "InputPaymentCredentials"
    }, {
        "@": API,
        "id": "-905587442",
        "predicate": "inputPaymentCredentialsAndroidPay",
        "params": [{"name": "payment_token", "type": "DataJSON"}, {"name": "google_transaction_id", "type": "string"}],
        "type": "InputPaymentCredentials"
    }, {
        "@": API,
        "id": "-419271411",
        "predicate": "inputMessagesFilterGeo",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "@": API,
        "id": "-530392189",
        "predicate": "inputMessagesFilterContacts",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "@": API,
        "id": "1893427255",
        "predicate": "updateChannelAvailableMessages",
        "params": [{"name": "channel_id", "type": "int"}, {"name": "available_min_id", "type": "int"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "1599903217",
        "predicate": "channelAdminLogEventActionTogglePreHistoryHidden",
        "params": [{"name": "new_value", "type": "Bool"}],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "-833715459",
        "predicate": "inputMediaGeoLive",
        "params": [{"name": "flags", "type": "#"}, {"name": "stopped", "type": "flags.0?true"}, {
            "name": "geo_point",
            "type": "InputGeoPoint"
        }, {"name": "period", "type": "flags.1?int"}],
        "type": "InputMedia"
    }, {
        "@": API,
        "id": "2084316681",
        "predicate": "messageMediaGeoLive",
        "params": [{"name": "geo", "type": "GeoPoint"}, {"name": "period", "type": "int"}],
        "type": "MessageMedia"
    }, {
        "@": API,
        "id": "1189204285",
        "predicate": "recentMeUrlUnknown",
        "params": [{"name": "url", "type": "string"}],
        "type": "RecentMeUrl"
    }, {
        "@": API,
        "id": "-1917045962",
        "predicate": "recentMeUrlUser",
        "params": [{"name": "url", "type": "string"}, {"name": "user_id", "type": "int"}],
        "type": "RecentMeUrl"
    }, {
        "@": API,
        "id": "-1608834311",
        "predicate": "recentMeUrlChat",
        "params": [{"name": "url", "type": "string"}, {"name": "chat_id", "type": "int"}],
        "type": "RecentMeUrl"
    }, {
        "@": API,
        "id": "-347535331",
        "predicate": "recentMeUrlChatInvite",
        "params": [{"name": "url", "type": "string"}, {"name": "chat_invite", "type": "ChatInvite"}],
        "type": "RecentMeUrl"
    }, {
        "@": API,
        "id": "-1140172836",
        "predicate": "recentMeUrlStickerSet",
        "params": [{"name": "url", "type": "string"}, {"name": "set", "type": "StickerSetCovered"}],
        "type": "RecentMeUrl"
    }, {
        "@": API,
        "id": "235081943",
        "predicate": "help.recentMeUrls",
        "params": [{"name": "urls", "type": "Vector<RecentMeUrl>"}, {
            "name": "chats",
            "type": "Vector<Chat>"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "help.RecentMeUrls"
    }, {
        "@": API,
        "id": "-266911767",
        "predicate": "channels.channelParticipantsNotModified",
        "params": [],
        "type": "channels.ChannelParticipants"
    }, {
        "@": API,
        "id": "1951620897",
        "predicate": "messages.messagesNotModified",
        "params": [{"name": "count", "type": "int"}],
        "type": "messages.Messages"
    }, {
        "@": API,
        "id": "482797855",
        "predicate": "inputSingleMedia",
        "params": [{"name": "flags", "type": "#"}, {"name": "media", "type": "InputMedia"}, {
            "name": "random_id",
            "type": "long"
        }, {"name": "message", "type": "string"}, {"name": "entities", "type": "flags.0?Vector<MessageEntity>"}],
        "type": "InputSingleMedia"
    }, {
        "@": API,
        "id": "-892779534",
        "predicate": "webAuthorization",
        "params": [{"name": "hash", "type": "long"}, {"name": "bot_id", "type": "int"}, {
            "name": "domain",
            "type": "string"
        }, {"name": "browser", "type": "string"}, {"name": "platform", "type": "string"}, {
            "name": "date_created",
            "type": "int"
        }, {"name": "date_active", "type": "int"}, {"name": "ip", "type": "string"}, {
            "name": "region",
            "type": "string"
        }],
        "type": "WebAuthorization"
    }, {
        "@": API,
        "id": "-313079300",
        "predicate": "account.webAuthorizations",
        "params": [{"name": "authorizations", "type": "Vector<WebAuthorization>"}, {
            "name": "users",
            "type": "Vector<User>"
        }],
        "type": "account.WebAuthorizations"
    }, {
        "@": API,
        "id": "-1502174430",
        "predicate": "inputMessageID",
        "params": [{"name": "id", "type": "int"}],
        "type": "InputMessage"
    }, {
        "@": API,
        "id": "-1160215659",
        "predicate": "inputMessageReplyTo",
        "params": [{"name": "id", "type": "int"}],
        "type": "InputMessage"
    }, {
        "@": API,
        "id": "-2037963464",
        "predicate": "inputMessagePinned",
        "params": [],
        "type": "InputMessage"
    }, {
        "@": API,
        "id": "-1687559349",
        "predicate": "messageEntityPhone",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "@": API,
        "id": "1280209983",
        "predicate": "messageEntityCashtag",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "@": API,
        "id": "-1410748418",
        "predicate": "messageActionBotAllowed",
        "params": [{"name": "domain", "type": "string"}],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "-55902537",
        "predicate": "inputDialogPeer",
        "params": [{"name": "peer", "type": "InputPeer"}],
        "type": "InputDialogPeer"
    }, {
        "@": API,
        "id": "-445792507",
        "predicate": "dialogPeer",
        "params": [{"name": "peer", "type": "Peer"}],
        "type": "DialogPeer"
    }, {
        "@": API,
        "id": "223655517",
        "predicate": "messages.foundStickerSetsNotModified",
        "params": [],
        "type": "messages.FoundStickerSets"
    }, {
        "@": API,
        "id": "1359533640",
        "predicate": "messages.foundStickerSets",
        "params": [{"name": "hash", "type": "int"}, {"name": "sets", "type": "Vector<StickerSetCovered>"}],
        "type": "messages.FoundStickerSets"
    }, {
        "@": API,
        "id": "1648543603",
        "predicate": "fileHash",
        "params": [{"name": "offset", "type": "int"}, {"name": "limit", "type": "int"}, {
            "name": "hash",
            "type": "bytes"
        }],
        "type": "FileHash"
    }, {
        "@": API,
        "id": "-104284986",
        "predicate": "webDocumentNoProxy",
        "params": [{"name": "url", "type": "string"}, {"name": "size", "type": "int"}, {
            "name": "mime_type",
            "type": "string"
        }, {"name": "attributes", "type": "Vector<DocumentAttribute>"}],
        "type": "WebDocument"
    }, {
        "@": API,
        "id": "1968737087",
        "predicate": "inputClientProxy",
        "params": [{"name": "address", "type": "string"}, {"name": "port", "type": "int"}],
        "type": "InputClientProxy"
    }, {
        "@": API,
        "id": "-483352705",
        "predicate": "help.termsOfServiceUpdateEmpty",
        "params": [{"name": "expires", "type": "int"}],
        "type": "help.TermsOfServiceUpdate"
    }, {
        "@": API,
        "id": "686618977",
        "predicate": "help.termsOfServiceUpdate",
        "params": [{"name": "expires", "type": "int"}, {"name": "terms_of_service", "type": "help.TermsOfService"}],
        "type": "help.TermsOfServiceUpdate"
    }, {
        "@": API,
        "id": "859091184",
        "predicate": "inputSecureFileUploaded",
        "params": [{"name": "id", "type": "long"}, {"name": "parts", "type": "int"}, {
            "name": "md5_checksum",
            "type": "string"
        }, {"name": "file_hash", "type": "bytes"}, {"name": "secret", "type": "bytes"}],
        "type": "InputSecureFile"
    }, {
        "@": API,
        "id": "1399317950",
        "predicate": "inputSecureFile",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}],
        "type": "InputSecureFile"
    }, {
        "@": API,
        "id": "-876089816",
        "predicate": "inputSecureFileLocation",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}],
        "type": "InputFileLocation"
    }, {"id": "1679398724", "predicate": "secureFileEmpty", "params": [], "type": "SecureFile"}, {
        "@": API,
        "id": "-534283678",
        "predicate": "secureFile",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}, {
            "name": "size",
            "type": "int"
        }, {"name": "dc_id", "type": "int"}, {"name": "date", "type": "int"}, {
            "name": "file_hash",
            "type": "bytes"
        }, {"name": "secret", "type": "bytes"}],
        "type": "SecureFile"
    }, {
        "@": API,
        "id": "-1964327229",
        "predicate": "secureData",
        "params": [{"name": "data", "type": "bytes"}, {"name": "data_hash", "type": "bytes"}, {
            "name": "secret",
            "type": "bytes"
        }],
        "type": "SecureData"
    }, {
        "@": API,
        "id": "2103482845",
        "predicate": "securePlainPhone",
        "params": [{"name": "phone", "type": "string"}],
        "type": "SecurePlainData"
    }, {
        "@": API,
        "id": "569137759",
        "predicate": "securePlainEmail",
        "params": [{"name": "email", "type": "string"}],
        "type": "SecurePlainData"
    }, {
        "@": API,
        "id": "-1658158621",
        "predicate": "secureValueTypePersonalDetails",
        "params": [],
        "type": "SecureValueType"
    }, {
        "@": API,
        "id": "1034709504",
        "predicate": "secureValueTypePassport",
        "params": [],
        "type": "SecureValueType"
    }, {
        "@": API,
        "id": "115615172",
        "predicate": "secureValueTypeDriverLicense",
        "params": [],
        "type": "SecureValueType"
    }, {
        "@": API,
        "id": "-1596951477",
        "predicate": "secureValueTypeIdentityCard",
        "params": [],
        "type": "SecureValueType"
    }, {
        "@": API,
        "id": "-1717268701",
        "predicate": "secureValueTypeInternalPassport",
        "params": [],
        "type": "SecureValueType"
    }, {
        "@": API,
        "id": "-874308058",
        "predicate": "secureValueTypeAddress",
        "params": [],
        "type": "SecureValueType"
    }, {
        "@": API,
        "id": "-63531698",
        "predicate": "secureValueTypeUtilityBill",
        "params": [],
        "type": "SecureValueType"
    }, {
        "@": API,
        "id": "-1995211763",
        "predicate": "secureValueTypeBankStatement",
        "params": [],
        "type": "SecureValueType"
    }, {
        "@": API,
        "id": "-1954007928",
        "predicate": "secureValueTypeRentalAgreement",
        "params": [],
        "type": "SecureValueType"
    }, {
        "@": API,
        "id": "-1713143702",
        "predicate": "secureValueTypePassportRegistration",
        "params": [],
        "type": "SecureValueType"
    }, {
        "@": API,
        "id": "-368907213",
        "predicate": "secureValueTypeTemporaryRegistration",
        "params": [],
        "type": "SecureValueType"
    }, {
        "@": API,
        "id": "-1289704741",
        "predicate": "secureValueTypePhone",
        "params": [],
        "type": "SecureValueType"
    }, {
        "@": API,
        "id": "-1908627474",
        "predicate": "secureValueTypeEmail",
        "params": [],
        "type": "SecureValueType"
    }, {
        "@": API,
        "id": "411017418",
        "predicate": "secureValue",
        "params": [{"name": "flags", "type": "#"}, {"name": "type", "type": "SecureValueType"}, {
            "name": "data",
            "type": "flags.0?SecureData"
        }, {"name": "front_side", "type": "flags.1?SecureFile"}, {
            "name": "reverse_side",
            "type": "flags.2?SecureFile"
        }, {"name": "selfie", "type": "flags.3?SecureFile"}, {
            "name": "translation",
            "type": "flags.6?Vector<SecureFile>"
        }, {"name": "files", "type": "flags.4?Vector<SecureFile>"}, {
            "name": "plain_data",
            "type": "flags.5?SecurePlainData"
        }, {"name": "hash", "type": "bytes"}],
        "type": "SecureValue"
    }, {
        "@": API,
        "id": "-618540889",
        "predicate": "inputSecureValue",
        "params": [{"name": "flags", "type": "#"}, {"name": "type", "type": "SecureValueType"}, {
            "name": "data",
            "type": "flags.0?SecureData"
        }, {"name": "front_side", "type": "flags.1?InputSecureFile"}, {
            "name": "reverse_side",
            "type": "flags.2?InputSecureFile"
        }, {"name": "selfie", "type": "flags.3?InputSecureFile"}, {
            "name": "translation",
            "type": "flags.6?Vector<InputSecureFile>"
        }, {"name": "files", "type": "flags.4?Vector<InputSecureFile>"}, {
            "name": "plain_data",
            "type": "flags.5?SecurePlainData"
        }],
        "type": "InputSecureValue"
    }, {
        "@": API,
        "id": "-316748368",
        "predicate": "secureValueHash",
        "params": [{"name": "type", "type": "SecureValueType"}, {"name": "hash", "type": "bytes"}],
        "type": "SecureValueHash"
    }, {
        "@": API,
        "id": "-391902247",
        "predicate": "secureValueErrorData",
        "params": [{"name": "type", "type": "SecureValueType"}, {
            "name": "data_hash",
            "type": "bytes"
        }, {"name": "field", "type": "string"}, {"name": "text", "type": "string"}],
        "type": "SecureValueError"
    }, {
        "@": API,
        "id": "12467706",
        "predicate": "secureValueErrorFrontSide",
        "params": [{"name": "type", "type": "SecureValueType"}, {"name": "file_hash", "type": "bytes"}, {
            "name": "text",
            "type": "string"
        }],
        "type": "SecureValueError"
    }, {
        "@": API,
        "id": "-2037765467",
        "predicate": "secureValueErrorReverseSide",
        "params": [{"name": "type", "type": "SecureValueType"}, {"name": "file_hash", "type": "bytes"}, {
            "name": "text",
            "type": "string"
        }],
        "type": "SecureValueError"
    }, {
        "@": API,
        "id": "-449327402",
        "predicate": "secureValueErrorSelfie",
        "params": [{"name": "type", "type": "SecureValueType"}, {"name": "file_hash", "type": "bytes"}, {
            "name": "text",
            "type": "string"
        }],
        "type": "SecureValueError"
    }, {
        "@": API,
        "id": "2054162547",
        "predicate": "secureValueErrorFile",
        "params": [{"name": "type", "type": "SecureValueType"}, {"name": "file_hash", "type": "bytes"}, {
            "name": "text",
            "type": "string"
        }],
        "type": "SecureValueError"
    }, {
        "@": API,
        "id": "1717706985",
        "predicate": "secureValueErrorFiles",
        "params": [{"name": "type", "type": "SecureValueType"}, {
            "name": "file_hash",
            "type": "Vector<bytes>"
        }, {"name": "text", "type": "string"}],
        "type": "SecureValueError"
    }, {
        "@": API,
        "id": "871426631",
        "predicate": "secureCredentialsEncrypted",
        "params": [{"name": "data", "type": "bytes"}, {"name": "hash", "type": "bytes"}, {
            "name": "secret",
            "type": "bytes"
        }],
        "type": "SecureCredentialsEncrypted"
    }, {
        "@": API,
        "id": "-1389486888",
        "predicate": "account.authorizationForm",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "required_types",
            "type": "Vector<SecureRequiredType>"
        }, {"name": "values", "type": "Vector<SecureValue>"}, {
            "name": "errors",
            "type": "Vector<SecureValueError>"
        }, {"name": "users", "type": "Vector<User>"}, {"name": "privacy_policy_url", "type": "flags.0?string"}],
        "type": "account.AuthorizationForm"
    }, {
        "@": API,
        "id": "-2128640689",
        "predicate": "account.sentEmailCode",
        "params": [{"name": "email_pattern", "type": "string"}, {"name": "length", "type": "int"}],
        "type": "account.SentEmailCode"
    }, {
        "@": API,
        "id": "455635795",
        "predicate": "messageActionSecureValuesSentMe",
        "params": [{"name": "values", "type": "Vector<SecureValue>"}, {
            "name": "credentials",
            "type": "SecureCredentialsEncrypted"
        }],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "-648257196",
        "predicate": "messageActionSecureValuesSent",
        "params": [{"name": "types", "type": "Vector<SecureValueType>"}],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "1722786150",
        "predicate": "help.deepLinkInfoEmpty",
        "params": [],
        "type": "help.DeepLinkInfo"
    }, {
        "@": API,
        "id": "1783556146",
        "predicate": "help.deepLinkInfo",
        "params": [{"name": "flags", "type": "#"}, {"name": "update_app", "type": "flags.0?true"}, {
            "name": "message",
            "type": "string"
        }, {"name": "entities", "type": "flags.1?Vector<MessageEntity>"}],
        "type": "help.DeepLinkInfo"
    }, {
        "@": API,
        "id": "289586518",
        "predicate": "savedPhoneContact",
        "params": [{"name": "phone", "type": "string"}, {"name": "first_name", "type": "string"}, {
            "name": "last_name",
            "type": "string"
        }, {"name": "date", "type": "int"}],
        "type": "SavedContact"
    }, {
        "@": API,
        "id": "1304052993",
        "predicate": "account.takeout",
        "params": [{"name": "id", "type": "long"}],
        "type": "account.Takeout"
    }, {
        "@": API,
        "id": "700340377",
        "predicate": "inputTakeoutFileLocation",
        "params": [],
        "type": "InputFileLocation"
    }, {
        "@": API,
        "id": "-513517117",
        "predicate": "updateDialogUnreadMark",
        "params": [{"name": "flags", "type": "#"}, {"name": "unread", "type": "flags.0?true"}, {
            "name": "peer",
            "type": "DialogPeer"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "-253500010",
        "predicate": "messages.dialogsNotModified",
        "params": [{"name": "count", "type": "int"}],
        "type": "messages.Dialogs"
    }, {
        "@": API,
        "id": "-1625153079",
        "predicate": "inputWebFileGeoPointLocation",
        "params": [{"name": "geo_point", "type": "InputGeoPoint"}, {
            "name": "access_hash",
            "type": "long"
        }, {"name": "w", "type": "int"}, {"name": "h", "type": "int"}, {
            "name": "zoom",
            "type": "int"
        }, {"name": "scale", "type": "int"}],
        "type": "InputWebFileLocation"
    }, {
        "@": API,
        "id": "-1255369827",
        "predicate": "contacts.topPeersDisabled",
        "params": [],
        "type": "contacts.TopPeers"
    }, {
        "@": API,
        "id": "-1685456582",
        "predicate": "inputReportReasonCopyright",
        "params": [],
        "type": "ReportReason"
    }, {
        "@": API,
        "id": "-732254058",
        "predicate": "passwordKdfAlgoUnknown",
        "params": [],
        "type": "PasswordKdfAlgo"
    }, {
        "@": API,
        "id": "4883767",
        "predicate": "securePasswordKdfAlgoUnknown",
        "params": [],
        "type": "SecurePasswordKdfAlgo"
    }, {
        "@": API,
        "id": "-1141711456",
        "predicate": "securePasswordKdfAlgoPBKDF2HMACSHA512iter100000",
        "params": [{"name": "salt", "type": "bytes"}],
        "type": "SecurePasswordKdfAlgo"
    }, {
        "@": API,
        "id": "-2042159726",
        "predicate": "securePasswordKdfAlgoSHA512",
        "params": [{"name": "salt", "type": "bytes"}],
        "type": "SecurePasswordKdfAlgo"
    }, {
        "@": API,
        "id": "354925740",
        "predicate": "secureSecretSettings",
        "params": [{"name": "secure_algo", "type": "SecurePasswordKdfAlgo"}, {
            "name": "secure_secret",
            "type": "bytes"
        }, {"name": "secure_secret_id", "type": "long"}],
        "type": "SecureSecretSettings"
    }, {
        "@": API,
        "id": "982592842",
        "predicate": "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow",
        "params": [{"name": "salt1", "type": "bytes"}, {"name": "salt2", "type": "bytes"}, {
            "name": "g",
            "type": "int"
        }, {"name": "p", "type": "bytes"}],
        "type": "PasswordKdfAlgo"
    }, {
        "@": API,
        "id": "-1736378792",
        "predicate": "inputCheckPasswordEmpty",
        "params": [],
        "type": "InputCheckPasswordSRP"
    }, {
        "@": API,
        "id": "-763367294",
        "predicate": "inputCheckPasswordSRP",
        "params": [{"name": "srp_id", "type": "long"}, {"name": "A", "type": "bytes"}, {"name": "M1", "type": "bytes"}],
        "type": "InputCheckPasswordSRP"
    }, {
        "@": API,
        "id": "-2036501105",
        "predicate": "secureValueError",
        "params": [{"name": "type", "type": "SecureValueType"}, {"name": "hash", "type": "bytes"}, {
            "name": "text",
            "type": "string"
        }],
        "type": "SecureValueError"
    }, {
        "@": API,
        "id": "-1592506512",
        "predicate": "secureValueErrorTranslationFile",
        "params": [{"name": "type", "type": "SecureValueType"}, {"name": "file_hash", "type": "bytes"}, {
            "name": "text",
            "type": "string"
        }],
        "type": "SecureValueError"
    }, {
        "@": API,
        "id": "878931416",
        "predicate": "secureValueErrorTranslationFiles",
        "params": [{"name": "type", "type": "SecureValueType"}, {
            "name": "file_hash",
            "type": "Vector<bytes>"
        }, {"name": "text", "type": "string"}],
        "type": "SecureValueError"
    }, {
        "@": API,
        "id": "-2103600678",
        "predicate": "secureRequiredType",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "native_names",
            "type": "flags.0?true"
        }, {"name": "selfie_required", "type": "flags.1?true"}, {
            "name": "translation_required",
            "type": "flags.2?true"
        }, {"name": "type", "type": "SecureValueType"}],
        "type": "SecureRequiredType"
    }, {
        "@": API,
        "id": "41187252",
        "predicate": "secureRequiredTypeOneOf",
        "params": [{"name": "types", "type": "Vector<SecureRequiredType>"}],
        "type": "SecureRequiredType"
    }, {
        "@": API,
        "id": "-1078332329",
        "predicate": "help.passportConfigNotModified",
        "params": [],
        "type": "help.PassportConfig"
    }, {
        "@": API,
        "id": "-1600596305",
        "predicate": "help.passportConfig",
        "params": [{"name": "hash", "type": "int"}, {"name": "countries_langs", "type": "DataJSON"}],
        "type": "help.PassportConfig"
    }, {
        "@": API,
        "id": "488313413",
        "predicate": "inputAppEvent",
        "params": [{"name": "time", "type": "double"}, {"name": "type", "type": "string"}, {
            "name": "peer",
            "type": "long"
        }, {"name": "data", "type": "JSONValue"}],
        "type": "InputAppEvent"
    }, {
        "@": API,
        "id": "-1059185703",
        "predicate": "jsonObjectValue",
        "params": [{"name": "key", "type": "string"}, {"name": "value", "type": "JSONValue"}],
        "type": "JSONObjectValue"
    }, {"id": "1064139624", "predicate": "jsonNull", "params": [], "type": "JSONValue"}, {
        "@": API,
        "id": "-952869270",
        "predicate": "jsonBool",
        "params": [{"name": "value", "type": "Bool"}],
        "type": "JSONValue"
    }, {
        "@": API,
        "id": "736157604",
        "predicate": "jsonNumber",
        "params": [{"name": "value", "type": "double"}],
        "type": "JSONValue"
    }, {
        "@": API,
        "id": "-1222740358",
        "predicate": "jsonString",
        "params": [{"name": "value", "type": "string"}],
        "type": "JSONValue"
    }, {
        "@": API,
        "id": "-146520221",
        "predicate": "jsonArray",
        "params": [{"name": "value", "type": "Vector<JSONValue>"}],
        "type": "JSONValue"
    }, {
        "@": API,
        "id": "-1715350371",
        "predicate": "jsonObject",
        "params": [{"name": "value", "type": "Vector<JSONObjectValue>"}],
        "type": "JSONValue"
    }, {
        "@": API,
        "id": "1279515160",
        "predicate": "updateUserPinnedMessage",
        "params": [{"name": "user_id", "type": "int"}, {"name": "id", "type": "int"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-519195831",
        "predicate": "updateChatPinnedMessage",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "id", "type": "int"}, {
            "name": "version",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1311015810",
        "predicate": "inputNotifyBroadcasts",
        "params": [],
        "type": "InputNotifyPeer"
    }, {"id": "-703403793", "predicate": "notifyBroadcasts", "params": [], "type": "NotifyPeer"}, {
        "@": API,
        "id": "-311786236",
        "predicate": "textSubscript",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "RichText"
    }, {
        "@": API,
        "id": "-939827711",
        "predicate": "textSuperscript",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "RichText"
    }, {
        "@": API,
        "id": "55281185",
        "predicate": "textMarked",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "RichText"
    }, {
        "@": API,
        "id": "483104362",
        "predicate": "textPhone",
        "params": [{"name": "text", "type": "RichText"}, {"name": "phone", "type": "string"}],
        "type": "RichText"
    }, {
        "@": API,
        "id": "136105807",
        "predicate": "textImage",
        "params": [{"name": "document_id", "type": "long"}, {"name": "w", "type": "int"}, {"name": "h", "type": "int"}],
        "type": "RichText"
    }, {
        "@": API,
        "id": "504660880",
        "predicate": "pageBlockKicker",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "878078826",
        "predicate": "pageTableCell",
        "params": [{"name": "flags", "type": "#"}, {"name": "header", "type": "flags.0?true"}, {
            "name": "align_center",
            "type": "flags.3?true"
        }, {"name": "align_right", "type": "flags.4?true"}, {
            "name": "valign_middle",
            "type": "flags.5?true"
        }, {"name": "valign_bottom", "type": "flags.6?true"}, {
            "name": "text",
            "type": "flags.7?RichText"
        }, {"name": "colspan", "type": "flags.1?int"}, {"name": "rowspan", "type": "flags.2?int"}],
        "type": "PageTableCell"
    }, {
        "@": API,
        "id": "-524237339",
        "predicate": "pageTableRow",
        "params": [{"name": "cells", "type": "Vector<PageTableCell>"}],
        "type": "PageTableRow"
    }, {
        "@": API,
        "id": "-1085412734",
        "predicate": "pageBlockTable",
        "params": [{"name": "flags", "type": "#"}, {"name": "bordered", "type": "flags.0?true"}, {
            "name": "striped",
            "type": "flags.1?true"
        }, {"name": "title", "type": "RichText"}, {"name": "rows", "type": "Vector<PageTableRow>"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "1869903447",
        "predicate": "pageCaption",
        "params": [{"name": "text", "type": "RichText"}, {"name": "credit", "type": "RichText"}],
        "type": "PageCaption"
    }, {
        "@": API,
        "id": "-1188055347",
        "predicate": "pageListItemText",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "PageListItem"
    }, {
        "@": API,
        "id": "635466748",
        "predicate": "pageListItemBlocks",
        "params": [{"name": "blocks", "type": "Vector<PageBlock>"}],
        "type": "PageListItem"
    }, {
        "@": API,
        "id": "1577484359",
        "predicate": "pageListOrderedItemText",
        "params": [{"name": "num", "type": "string"}, {"name": "text", "type": "RichText"}],
        "type": "PageListOrderedItem"
    }, {
        "@": API,
        "id": "-1730311882",
        "predicate": "pageListOrderedItemBlocks",
        "params": [{"name": "num", "type": "string"}, {"name": "blocks", "type": "Vector<PageBlock>"}],
        "type": "PageListOrderedItem"
    }, {
        "@": API,
        "id": "-1702174239",
        "predicate": "pageBlockOrderedList",
        "params": [{"name": "items", "type": "Vector<PageListOrderedItem>"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "1987480557",
        "predicate": "pageBlockDetails",
        "params": [{"name": "flags", "type": "#"}, {"name": "open", "type": "flags.0?true"}, {
            "name": "blocks",
            "type": "Vector<PageBlock>"
        }, {"name": "title", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "-1282352120",
        "predicate": "pageRelatedArticle",
        "params": [{"name": "flags", "type": "#"}, {"name": "url", "type": "string"}, {
            "name": "webpage_id",
            "type": "long"
        }, {"name": "title", "type": "flags.0?string"}, {
            "name": "description",
            "type": "flags.1?string"
        }, {"name": "photo_id", "type": "flags.2?long"}, {
            "name": "author",
            "type": "flags.3?string"
        }, {"name": "published_date", "type": "flags.4?int"}],
        "type": "PageRelatedArticle"
    }, {
        "@": API,
        "id": "370236054",
        "predicate": "pageBlockRelatedArticles",
        "params": [{"name": "title", "type": "RichText"}, {"name": "articles", "type": "Vector<PageRelatedArticle>"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "-1538310410",
        "predicate": "pageBlockMap",
        "params": [{"name": "geo", "type": "GeoPoint"}, {"name": "zoom", "type": "int"}, {
            "name": "w",
            "type": "int"
        }, {"name": "h", "type": "int"}, {"name": "caption", "type": "PageCaption"}],
        "type": "PageBlock"
    }, {
        "@": API,
        "id": "-1738178803",
        "predicate": "page",
        "params": [{"name": "flags", "type": "#"}, {"name": "part", "type": "flags.0?true"}, {
            "name": "rtl",
            "type": "flags.1?true"
        }, {"name": "v2", "type": "flags.2?true"}, {"name": "url", "type": "string"}, {
            "name": "blocks",
            "type": "Vector<PageBlock>"
        }, {"name": "photos", "type": "Vector<Photo>"}, {
            "name": "documents",
            "type": "Vector<Document>"
        }, {"name": "views", "type": "flags.3?int"}],
        "type": "Page"
    }, {
        "@": API,
        "id": "-610373422",
        "predicate": "inputPrivacyKeyPhoneP2P",
        "params": [],
        "type": "InputPrivacyKey"
    }, {"id": "961092808", "predicate": "privacyKeyPhoneP2P", "params": [], "type": "PrivacyKey"}, {
        "@": API,
        "id": "894777186",
        "predicate": "textAnchor",
        "params": [{"name": "text", "type": "RichText"}, {"name": "name", "type": "string"}],
        "type": "RichText"
    }, {
        "@": API,
        "id": "-1945767479",
        "predicate": "help.supportName",
        "params": [{"name": "name", "type": "string"}],
        "type": "help.SupportName"
    }, {
        "@": API,
        "id": "-206688531",
        "predicate": "help.userInfoEmpty",
        "params": [],
        "type": "help.UserInfo"
    }, {
        "@": API,
        "id": "32192344",
        "predicate": "help.userInfo",
        "params": [{"name": "message", "type": "string"}, {
            "name": "entities",
            "type": "Vector<MessageEntity>"
        }, {"name": "author", "type": "string"}, {"name": "date", "type": "int"}],
        "type": "help.UserInfo"
    }, {
        "@": API,
        "id": "-202219658",
        "predicate": "messageActionContactSignUp",
        "params": [],
        "type": "MessageAction"
    }, {
        "@": API,
        "id": "-1398708869",
        "predicate": "updateMessagePoll",
        "params": [{"name": "flags", "type": "#"}, {"name": "poll_id", "type": "long"}, {
            "name": "poll",
            "type": "flags.0?Poll"
        }, {"name": "results", "type": "PollResults"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "1823064809",
        "predicate": "pollAnswer",
        "params": [{"name": "text", "type": "string"}, {"name": "option", "type": "bytes"}],
        "type": "PollAnswer"
    }, {
        "@": API,
        "id": "-2032041631",
        "predicate": "poll",
        "params": [{"name": "id", "type": "long"}, {"name": "flags", "type": "#"}, {
            "name": "closed",
            "type": "flags.0?true"
        }, {"name": "public_voters", "type": "flags.1?true"}, {
            "name": "multiple_choice",
            "type": "flags.2?true"
        }, {"name": "quiz", "type": "flags.3?true"}, {"name": "question", "type": "string"}, {
            "name": "answers",
            "type": "Vector<PollAnswer>"
        }, {"name": "close_period", "type": "flags.4?int"}, {"name": "close_date", "type": "flags.5?int"}],
        "type": "Poll"
    }, {
        "@": API,
        "id": "997055186",
        "predicate": "pollAnswerVoters",
        "params": [{"name": "flags", "type": "#"}, {"name": "chosen", "type": "flags.0?true"}, {
            "name": "correct",
            "type": "flags.1?true"
        }, {"name": "option", "type": "bytes"}, {"name": "voters", "type": "int"}],
        "type": "PollAnswerVoters"
    }, {
        "@": API,
        "id": "-1159937629",
        "predicate": "pollResults",
        "params": [{"name": "flags", "type": "#"}, {"name": "min", "type": "flags.0?true"}, {
            "name": "results",
            "type": "flags.1?Vector<PollAnswerVoters>"
        }, {"name": "total_voters", "type": "flags.2?int"}, {
            "name": "recent_voters",
            "type": "flags.3?Vector<int>"
        }, {"name": "solution", "type": "flags.4?string"}, {
            "name": "solution_entities",
            "type": "flags.4?Vector<MessageEntity>"
        }],
        "type": "PollResults"
    }, {
        "@": API,
        "id": "261416433",
        "predicate": "inputMediaPoll",
        "params": [{"name": "flags", "type": "#"}, {"name": "poll", "type": "Poll"}, {
            "name": "correct_answers",
            "type": "flags.0?Vector<bytes>"
        }, {"name": "solution", "type": "flags.1?string"}, {
            "name": "solution_entities",
            "type": "flags.1?Vector<MessageEntity>"
        }],
        "type": "InputMedia"
    }, {
        "@": API,
        "id": "1272375192",
        "predicate": "messageMediaPoll",
        "params": [{"name": "poll", "type": "Poll"}, {"name": "results", "type": "PollResults"}],
        "type": "MessageMedia"
    }, {
        "@": API,
        "id": "-264117680",
        "predicate": "chatOnlines",
        "params": [{"name": "onlines", "type": "int"}],
        "type": "ChatOnlines"
    }, {
        "@": API,
        "id": "1202287072",
        "predicate": "statsURL",
        "params": [{"name": "url", "type": "string"}],
        "type": "StatsURL"
    }, {
        "@": API,
        "id": "-525288402",
        "predicate": "photoStrippedSize",
        "params": [{"name": "type", "type": "string"}, {"name": "bytes", "type": "bytes"}],
        "type": "PhotoSize"
    }, {
        "@": API,
        "id": "1605510357",
        "predicate": "chatAdminRights",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "change_info",
            "type": "flags.0?true"
        }, {"name": "post_messages", "type": "flags.1?true"}, {
            "name": "edit_messages",
            "type": "flags.2?true"
        }, {"name": "delete_messages", "type": "flags.3?true"}, {
            "name": "ban_users",
            "type": "flags.4?true"
        }, {"name": "invite_users", "type": "flags.5?true"}, {
            "name": "pin_messages",
            "type": "flags.7?true"
        }, {"name": "add_admins", "type": "flags.9?true"}, {"name": "anonymous", "type": "flags.10?true"}],
        "type": "ChatAdminRights"
    }, {
        "@": API,
        "id": "-1626209256",
        "predicate": "chatBannedRights",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "view_messages",
            "type": "flags.0?true"
        }, {"name": "send_messages", "type": "flags.1?true"}, {
            "name": "send_media",
            "type": "flags.2?true"
        }, {"name": "send_stickers", "type": "flags.3?true"}, {
            "name": "send_gifs",
            "type": "flags.4?true"
        }, {"name": "send_games", "type": "flags.5?true"}, {
            "name": "send_inline",
            "type": "flags.6?true"
        }, {"name": "embed_links", "type": "flags.7?true"}, {
            "name": "send_polls",
            "type": "flags.8?true"
        }, {"name": "change_info", "type": "flags.10?true"}, {
            "name": "invite_users",
            "type": "flags.15?true"
        }, {"name": "pin_messages", "type": "flags.17?true"}, {"name": "until_date", "type": "int"}],
        "type": "ChatBannedRights"
    }, {
        "@": API,
        "id": "1421875280",
        "predicate": "updateChatDefaultBannedRights",
        "params": [{"name": "peer", "type": "Peer"}, {
            "name": "default_banned_rights",
            "type": "ChatBannedRights"
        }, {"name": "version", "type": "int"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-433014407",
        "predicate": "inputWallPaper",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}],
        "type": "InputWallPaper"
    }, {
        "@": API,
        "id": "1913199744",
        "predicate": "inputWallPaperSlug",
        "params": [{"name": "slug", "type": "string"}],
        "type": "InputWallPaper"
    }, {
        "@": API,
        "id": "-1150621555",
        "predicate": "channelParticipantsContacts",
        "params": [{"name": "q", "type": "string"}],
        "type": "ChannelParticipantsFilter"
    }, {
        "@": API,
        "id": "771095562",
        "predicate": "channelAdminLogEventActionDefaultBannedRights",
        "params": [{"name": "prev_banned_rights", "type": "ChatBannedRights"}, {
            "name": "new_banned_rights",
            "type": "ChatBannedRights"
        }],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "-1895328189",
        "predicate": "channelAdminLogEventActionStopPoll",
        "params": [{"name": "message", "type": "Message"}],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "471437699",
        "predicate": "account.wallPapersNotModified",
        "params": [],
        "type": "account.WallPapers"
    }, {
        "@": API,
        "id": "1881892265",
        "predicate": "account.wallPapers",
        "params": [{"name": "hash", "type": "int"}, {"name": "wallpapers", "type": "Vector<WallPaper>"}],
        "type": "account.WallPapers"
    }, {
        "@": API,
        "id": "-557924733",
        "predicate": "codeSettings",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "allow_flashcall",
            "type": "flags.0?true"
        }, {"name": "current_number", "type": "flags.1?true"}, {"name": "allow_app_hash", "type": "flags.4?true"}],
        "type": "CodeSettings"
    }, {
        "@": API,
        "id": "84438264",
        "predicate": "wallPaperSettings",
        "params": [{"name": "flags", "type": "#"}, {"name": "blur", "type": "flags.1?true"}, {
            "name": "motion",
            "type": "flags.2?true"
        }, {"name": "background_color", "type": "flags.0?int"}, {
            "name": "second_background_color",
            "type": "flags.4?int"
        }, {"name": "intensity", "type": "flags.3?int"}, {"name": "rotation", "type": "flags.4?int"}],
        "type": "WallPaperSettings"
    }, {
        "@": API,
        "id": "-532532493",
        "predicate": "autoDownloadSettings",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "disabled",
            "type": "flags.0?true"
        }, {"name": "video_preload_large", "type": "flags.1?true"}, {
            "name": "audio_preload_next",
            "type": "flags.2?true"
        }, {"name": "phonecalls_less_data", "type": "flags.3?true"}, {
            "name": "photo_size_max",
            "type": "int"
        }, {"name": "video_size_max", "type": "int"}, {
            "name": "file_size_max",
            "type": "int"
        }, {"name": "video_upload_maxbitrate", "type": "int"}],
        "type": "AutoDownloadSettings"
    }, {
        "@": API,
        "id": "1674235686",
        "predicate": "account.autoDownloadSettings",
        "params": [{"name": "low", "type": "AutoDownloadSettings"}, {
            "name": "medium",
            "type": "AutoDownloadSettings"
        }, {"name": "high", "type": "AutoDownloadSettings"}],
        "type": "account.AutoDownloadSettings"
    }, {
        "@": API,
        "id": "-709641735",
        "predicate": "emojiKeyword",
        "params": [{"name": "keyword", "type": "string"}, {"name": "emoticons", "type": "Vector<string>"}],
        "type": "EmojiKeyword"
    }, {
        "@": API,
        "id": "594408994",
        "predicate": "emojiKeywordDeleted",
        "params": [{"name": "keyword", "type": "string"}, {"name": "emoticons", "type": "Vector<string>"}],
        "type": "EmojiKeyword"
    }, {
        "@": API,
        "id": "1556570557",
        "predicate": "emojiKeywordsDifference",
        "params": [{"name": "lang_code", "type": "string"}, {"name": "from_version", "type": "int"}, {
            "name": "version",
            "type": "int"
        }, {"name": "keywords", "type": "Vector<EmojiKeyword>"}],
        "type": "EmojiKeywordsDifference"
    }, {
        "@": API,
        "id": "-1519029347",
        "predicate": "emojiURL",
        "params": [{"name": "url", "type": "string"}],
        "type": "EmojiURL"
    }, {
        "@": API,
        "id": "-1275374751",
        "predicate": "emojiLanguage",
        "params": [{"name": "lang_code", "type": "string"}],
        "type": "EmojiLanguage"
    }, {
        "@": API,
        "id": "-1529000952",
        "predicate": "inputPrivacyKeyForwards",
        "params": [],
        "type": "InputPrivacyKey"
    }, {"id": "1777096355", "predicate": "privacyKeyForwards", "params": [], "type": "PrivacyKey"}, {
        "@": API,
        "id": "1461304012",
        "predicate": "inputPrivacyKeyProfilePhoto",
        "params": [],
        "type": "InputPrivacyKey"
    }, {
        "@": API,
        "id": "-1777000467",
        "predicate": "privacyKeyProfilePhoto",
        "params": [],
        "type": "PrivacyKey"
    }, {
        "@": API,
        "id": "-1132476723",
        "predicate": "fileLocationToBeDeprecated",
        "params": [{"name": "volume_id", "type": "long"}, {"name": "local_id", "type": "int"}],
        "type": "FileLocation"
    }, {
        "@": API,
        "id": "1075322878",
        "predicate": "inputPhotoFileLocation",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}, {
            "name": "file_reference",
            "type": "bytes"
        }, {"name": "thumb_size", "type": "string"}],
        "type": "InputFileLocation"
    }, {
        "@": API,
        "id": "-667654413",
        "predicate": "inputPhotoLegacyFileLocation",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}, {
            "name": "file_reference",
            "type": "bytes"
        }, {"name": "volume_id", "type": "long"}, {"name": "local_id", "type": "int"}, {
            "name": "secret",
            "type": "long"
        }],
        "type": "InputFileLocation"
    }, {
        "@": API,
        "id": "668375447",
        "predicate": "inputPeerPhotoFileLocation",
        "params": [{"name": "flags", "type": "#"}, {"name": "big", "type": "flags.0?true"}, {
            "name": "peer",
            "type": "InputPeer"
        }, {"name": "volume_id", "type": "long"}, {"name": "local_id", "type": "int"}],
        "type": "InputFileLocation"
    }, {
        "@": API,
        "id": "230353641",
        "predicate": "inputStickerSetThumb",
        "params": [{"name": "stickerset", "type": "InputStickerSet"}, {
            "name": "volume_id",
            "type": "long"
        }, {"name": "local_id", "type": "int"}],
        "type": "InputFileLocation"
    }, {
        "@": API,
        "id": "-11252123",
        "predicate": "folder",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "autofill_new_broadcasts",
            "type": "flags.0?true"
        }, {"name": "autofill_public_groups", "type": "flags.1?true"}, {
            "name": "autofill_new_correspondents",
            "type": "flags.2?true"
        }, {"name": "id", "type": "int"}, {"name": "title", "type": "string"}, {
            "name": "photo",
            "type": "flags.3?ChatPhoto"
        }],
        "type": "Folder"
    }, {
        "@": API,
        "id": "1908216652",
        "predicate": "dialogFolder",
        "params": [{"name": "flags", "type": "#"}, {"name": "pinned", "type": "flags.2?true"}, {
            "name": "folder",
            "type": "Folder"
        }, {"name": "peer", "type": "Peer"}, {
            "name": "top_message",
            "type": "int"
        }, {"name": "unread_muted_peers_count", "type": "int"}, {
            "name": "unread_unmuted_peers_count",
            "type": "int"
        }, {"name": "unread_muted_messages_count", "type": "int"}, {
            "name": "unread_unmuted_messages_count",
            "type": "int"
        }],
        "type": "Dialog"
    }, {
        "@": API,
        "id": "1684014375",
        "predicate": "inputDialogPeerFolder",
        "params": [{"name": "folder_id", "type": "int"}],
        "type": "InputDialogPeer"
    }, {
        "@": API,
        "id": "1363483106",
        "predicate": "dialogPeerFolder",
        "params": [{"name": "folder_id", "type": "int"}],
        "type": "DialogPeer"
    }, {
        "@": API,
        "id": "-70073706",
        "predicate": "inputFolderPeer",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "folder_id", "type": "int"}],
        "type": "InputFolderPeer"
    }, {
        "@": API,
        "id": "-373643672",
        "predicate": "folderPeer",
        "params": [{"name": "peer", "type": "Peer"}, {"name": "folder_id", "type": "int"}],
        "type": "FolderPeer"
    }, {
        "@": API,
        "id": "422972864",
        "predicate": "updateFolderPeers",
        "params": [{"name": "folder_peers", "type": "Vector<FolderPeer>"}, {
            "name": "pts",
            "type": "int"
        }, {"name": "pts_count", "type": "int"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "756118935",
        "predicate": "inputUserFromMessage",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "msg_id", "type": "int"}, {
            "name": "user_id",
            "type": "int"
        }],
        "type": "InputUser"
    }, {
        "@": API,
        "id": "707290417",
        "predicate": "inputChannelFromMessage",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "msg_id", "type": "int"}, {
            "name": "channel_id",
            "type": "int"
        }],
        "type": "InputChannel"
    }, {
        "@": API,
        "id": "398123750",
        "predicate": "inputPeerUserFromMessage",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "msg_id", "type": "int"}, {
            "name": "user_id",
            "type": "int"
        }],
        "type": "InputPeer"
    }, {
        "@": API,
        "id": "-1667893317",
        "predicate": "inputPeerChannelFromMessage",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "msg_id", "type": "int"}, {
            "name": "channel_id",
            "type": "int"
        }],
        "type": "InputPeer"
    }, {
        "@": API,
        "id": "55761658",
        "predicate": "inputPrivacyKeyPhoneNumber",
        "params": [],
        "type": "InputPrivacyKey"
    }, {
        "@": API,
        "id": "-778378131",
        "predicate": "privacyKeyPhoneNumber",
        "params": [],
        "type": "PrivacyKey"
    }, {
        "@": API,
        "id": "-1472172887",
        "predicate": "topPeerCategoryForwardUsers",
        "params": [],
        "type": "TopPeerCategory"
    }, {
        "@": API,
        "id": "-68239120",
        "predicate": "topPeerCategoryForwardChats",
        "params": [],
        "type": "TopPeerCategory"
    }, {
        "@": API,
        "id": "-1569748965",
        "predicate": "channelAdminLogEventActionChangeLinkedChat",
        "params": [{"name": "prev_value", "type": "int"}, {"name": "new_value", "type": "int"}],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "-398136321",
        "predicate": "messages.searchCounter",
        "params": [{"name": "flags", "type": "#"}, {"name": "inexact", "type": "flags.1?true"}, {
            "name": "filter",
            "type": "MessagesFilter"
        }, {"name": "count", "type": "int"}],
        "type": "messages.SearchCounter"
    }, {
        "@": API,
        "id": "280464681",
        "predicate": "keyboardButtonUrlAuth",
        "params": [{"name": "flags", "type": "#"}, {"name": "text", "type": "string"}, {
            "name": "fwd_text",
            "type": "flags.0?string"
        }, {"name": "url", "type": "string"}, {"name": "button_id", "type": "int"}],
        "type": "KeyboardButton"
    }, {
        "@": API,
        "id": "-802258988",
        "predicate": "inputKeyboardButtonUrlAuth",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "request_write_access",
            "type": "flags.0?true"
        }, {"name": "text", "type": "string"}, {"name": "fwd_text", "type": "flags.1?string"}, {
            "name": "url",
            "type": "string"
        }, {"name": "bot", "type": "InputUser"}],
        "type": "KeyboardButton"
    }, {
        "@": API,
        "id": "-1831650802",
        "predicate": "urlAuthResultRequest",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "request_write_access",
            "type": "flags.0?true"
        }, {"name": "bot", "type": "User"}, {"name": "domain", "type": "string"}],
        "type": "UrlAuthResult"
    }, {
        "@": API,
        "id": "-1886646706",
        "predicate": "urlAuthResultAccepted",
        "params": [{"name": "url", "type": "string"}],
        "type": "UrlAuthResult"
    }, {
        "@": API,
        "id": "-1445536993",
        "predicate": "urlAuthResultDefault",
        "params": [],
        "type": "UrlAuthResult"
    }, {
        "@": API,
        "id": "1283572154",
        "predicate": "inputPrivacyValueAllowChatParticipants",
        "params": [{"name": "chats", "type": "Vector<int>"}],
        "type": "InputPrivacyRule"
    }, {
        "@": API,
        "id": "-668769361",
        "predicate": "inputPrivacyValueDisallowChatParticipants",
        "params": [{"name": "chats", "type": "Vector<int>"}],
        "type": "InputPrivacyRule"
    }, {
        "@": API,
        "id": "415136107",
        "predicate": "privacyValueAllowChatParticipants",
        "params": [{"name": "chats", "type": "Vector<int>"}],
        "type": "PrivacyRule"
    }, {
        "@": API,
        "id": "-1397881200",
        "predicate": "privacyValueDisallowChatParticipants",
        "params": [{"name": "chats", "type": "Vector<int>"}],
        "type": "PrivacyRule"
    }, {
        "@": API,
        "id": "-1672577397",
        "predicate": "messageEntityUnderline",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "@": API,
        "id": "-1090087980",
        "predicate": "messageEntityStrike",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "@": API,
        "id": "34469328",
        "predicate": "messageEntityBlockquote",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "@": API,
        "id": "1786671974",
        "predicate": "updatePeerSettings",
        "params": [{"name": "peer", "type": "Peer"}, {"name": "settings", "type": "PeerSettings"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1078612597",
        "predicate": "channelLocationEmpty",
        "params": [],
        "type": "ChannelLocation"
    }, {
        "@": API,
        "id": "547062491",
        "predicate": "channelLocation",
        "params": [{"name": "geo_point", "type": "GeoPoint"}, {"name": "address", "type": "string"}],
        "type": "ChannelLocation"
    }, {
        "@": API,
        "id": "-901375139",
        "predicate": "peerLocated",
        "params": [{"name": "peer", "type": "Peer"}, {"name": "expires", "type": "int"}, {
            "name": "distance",
            "type": "int"
        }],
        "type": "PeerLocated"
    }, {
        "@": API,
        "id": "-1263546448",
        "predicate": "updatePeerLocated",
        "params": [{"name": "peers", "type": "Vector<PeerLocated>"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "241923758",
        "predicate": "channelAdminLogEventActionChangeLocation",
        "params": [{"name": "prev_value", "type": "ChannelLocation"}, {"name": "new_value", "type": "ChannelLocation"}],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "-606798099",
        "predicate": "inputReportReasonGeoIrrelevant",
        "params": [],
        "type": "ReportReason"
    }, {
        "@": API,
        "id": "1401984889",
        "predicate": "channelAdminLogEventActionToggleSlowMode",
        "params": [{"name": "prev_value", "type": "int"}, {"name": "new_value", "type": "int"}],
        "type": "ChannelAdminLogEventAction"
    }, {
        "@": API,
        "id": "1148485274",
        "predicate": "auth.authorizationSignUpRequired",
        "params": [{"name": "flags", "type": "#"}, {"name": "terms_of_service", "type": "flags.0?help.TermsOfService"}],
        "type": "auth.Authorization"
    }, {
        "@": API,
        "id": "-666824391",
        "predicate": "payments.paymentVerificationNeeded",
        "params": [{"name": "url", "type": "string"}],
        "type": "payments.PaymentResult"
    }, {
        "@": API,
        "id": "42402760",
        "predicate": "inputStickerSetAnimatedEmoji",
        "params": [],
        "type": "InputStickerSet"
    }, {
        "@": API,
        "id": "967122427",
        "predicate": "updateNewScheduledMessage",
        "params": [{"name": "message", "type": "Message"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1870238482",
        "predicate": "updateDeleteScheduledMessages",
        "params": [{"name": "peer", "type": "Peer"}, {"name": "messages", "type": "Vector<int>"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-797791052",
        "predicate": "restrictionReason",
        "params": [{"name": "platform", "type": "string"}, {"name": "reason", "type": "string"}, {
            "name": "text",
            "type": "string"
        }],
        "type": "RestrictionReason"
    }, {
        "@": API,
        "id": "1012306921",
        "predicate": "inputTheme",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}],
        "type": "InputTheme"
    }, {
        "@": API,
        "id": "-175567375",
        "predicate": "inputThemeSlug",
        "params": [{"name": "slug", "type": "string"}],
        "type": "InputTheme"
    }, {
        "@": API,
        "id": "42930452",
        "predicate": "theme",
        "params": [{"name": "flags", "type": "#"}, {"name": "creator", "type": "flags.0?true"}, {
            "name": "default",
            "type": "flags.1?true"
        }, {"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}, {
            "name": "slug",
            "type": "string"
        }, {"name": "title", "type": "string"}, {"name": "document", "type": "flags.2?Document"}, {
            "name": "settings",
            "type": "flags.3?ThemeSettings"
        }, {"name": "installs_count", "type": "int"}],
        "type": "Theme"
    }, {
        "@": API,
        "id": "-199313886",
        "predicate": "account.themesNotModified",
        "params": [],
        "type": "account.Themes"
    }, {
        "@": API,
        "id": "2137482273",
        "predicate": "account.themes",
        "params": [{"name": "hash", "type": "int"}, {"name": "themes", "type": "Vector<Theme>"}],
        "type": "account.Themes"
    }, {
        "@": API,
        "id": "-2112423005",
        "predicate": "updateTheme",
        "params": [{"name": "theme", "type": "Theme"}],
        "type": "Update"
    }, {
        "@": API,
        "id": "-786326563",
        "predicate": "inputPrivacyKeyAddedByPhone",
        "params": [],
        "type": "InputPrivacyKey"
    }, {
        "@": API,
        "id": "1124062251",
        "predicate": "privacyKeyAddedByPhone",
        "params": [],
        "type": "PrivacyKey"
    }, {
        "@": API,
        "id": "-2027964103",
        "predicate": "updateGeoLiveViewed",
        "params": [{"name": "peer", "type": "Peer"}, {"name": "msg_id", "type": "int"}],
        "type": "Update"
    }, {"id": "1448076945", "predicate": "updateLoginToken", "params": [], "type": "Update"}, {
        "@": API,
        "id": "1654593920",
        "predicate": "auth.loginToken",
        "params": [{"name": "expires", "type": "int"}, {"name": "token", "type": "bytes"}],
        "type": "auth.LoginToken"
    }, {
        "@": API,
        "id": "110008598",
        "predicate": "auth.loginTokenMigrateTo",
        "params": [{"name": "dc_id", "type": "int"}, {"name": "token", "type": "bytes"}],
        "type": "auth.LoginToken"
    }, {
        "@": API,
        "id": "957176926",
        "predicate": "auth.loginTokenSuccess",
        "params": [{"name": "authorization", "type": "auth.Authorization"}],
        "type": "auth.LoginToken"
    }, {
        "@": API,
        "id": "1474462241",
        "predicate": "account.contentSettings",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "sensitive_enabled",
            "type": "flags.0?true"
        }, {"name": "sensitive_can_change", "type": "flags.1?true"}],
        "type": "account.ContentSettings"
    }, {
        "@": API,
        "id": "-1456996667",
        "predicate": "messages.inactiveChats",
        "params": [{"name": "dates", "type": "Vector<int>"}, {
            "name": "chats",
            "type": "Vector<Chat>"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "messages.InactiveChats"
    }, {"id": "-1012849566", "predicate": "baseThemeClassic", "params": [], "type": "BaseTheme"}, {
        "@": API,
        "id": "-69724536",
        "predicate": "baseThemeDay",
        "params": [],
        "type": "BaseTheme"
    }, {"id": "-1212997976", "predicate": "baseThemeNight", "params": [], "type": "BaseTheme"}, {
        "@": API,
        "id": "1834973166",
        "predicate": "baseThemeTinted",
        "params": [],
        "type": "BaseTheme"
    }, {"id": "1527845466", "predicate": "baseThemeArctic", "params": [], "type": "BaseTheme"}, {
        "@": API,
        "id": "-2077770836",
        "predicate": "inputWallPaperNoFile",
        "params": [],
        "type": "InputWallPaper"
    }, {
        "@": API,
        "id": "-1963717851",
        "predicate": "wallPaperNoFile",
        "params": [{"name": "flags", "type": "#"}, {"name": "default", "type": "flags.1?true"}, {
            "name": "dark",
            "type": "flags.4?true"
        }, {"name": "settings", "type": "flags.2?WallPaperSettings"}],
        "type": "WallPaper"
    }, {
        "@": API,
        "id": "-1118798639",
        "predicate": "inputThemeSettings",
        "params": [{"name": "flags", "type": "#"}, {"name": "base_theme", "type": "BaseTheme"}, {
            "name": "accent_color",
            "type": "int"
        }, {"name": "message_top_color", "type": "flags.0?int"}, {
            "name": "message_bottom_color",
            "type": "flags.0?int"
        }, {"name": "wallpaper", "type": "flags.1?InputWallPaper"}, {
            "name": "wallpaper_settings",
            "type": "flags.1?WallPaperSettings"
        }],
        "type": "InputThemeSettings"
    }, {
        "@": API,
        "id": "-1676371894",
        "predicate": "themeSettings",
        "params": [{"name": "flags", "type": "#"}, {"name": "base_theme", "type": "BaseTheme"}, {
            "name": "accent_color",
            "type": "int"
        }, {"name": "message_top_color", "type": "flags.0?int"}, {
            "name": "message_bottom_color",
            "type": "flags.0?int"
        }, {"name": "wallpaper", "type": "flags.1?WallPaper"}],
        "type": "ThemeSettings"
    }, {
        "@": API,
        "id": "1421174295",
        "predicate": "webPageAttributeTheme",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "documents",
            "type": "flags.0?Vector<Document>"
        }, {"name": "settings", "type": "flags.1?ThemeSettings"}],
        "type": "WebPageAttribute"
    }, {
        "@": API,
        "id": "1123585836",
        "predicate": "updateMessagePollVote",
        "params": [{"name": "poll_id", "type": "long"}, {"name": "user_id", "type": "int"}, {
            "name": "options",
            "type": "Vector<bytes>"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1567730343",
        "predicate": "messageUserVote",
        "params": [{"name": "user_id", "type": "int"}, {"name": "option", "type": "bytes"}, {
            "name": "date",
            "type": "int"
        }],
        "type": "MessageUserVote"
    }, {
        "@": API,
        "id": "909603888",
        "predicate": "messageUserVoteInputOption",
        "params": [{"name": "user_id", "type": "int"}, {"name": "date", "type": "int"}],
        "type": "MessageUserVote"
    }, {
        "@": API,
        "id": "244310238",
        "predicate": "messageUserVoteMultiple",
        "params": [{"name": "user_id", "type": "int"}, {"name": "options", "type": "Vector<bytes>"}, {
            "name": "date",
            "type": "int"
        }],
        "type": "MessageUserVote"
    }, {
        "@": API,
        "id": "136574537",
        "predicate": "messages.votesList",
        "params": [{"name": "flags", "type": "#"}, {"name": "count", "type": "int"}, {
            "name": "votes",
            "type": "Vector<MessageUserVote>"
        }, {"name": "users", "type": "Vector<User>"}, {"name": "next_offset", "type": "flags.0?string"}],
        "type": "messages.VotesList"
    }, {
        "@": API,
        "id": "-1144565411",
        "predicate": "keyboardButtonRequestPoll",
        "params": [{"name": "flags", "type": "#"}, {"name": "quiz", "type": "flags.0?Bool"}, {
            "name": "text",
            "type": "string"
        }],
        "type": "KeyboardButton"
    }, {
        "@": API,
        "id": "1981704948",
        "predicate": "messageEntityBankCard",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "@": API,
        "id": "-177732982",
        "predicate": "bankCardOpenUrl",
        "params": [{"name": "url", "type": "string"}, {"name": "name", "type": "string"}],
        "type": "BankCardOpenUrl"
    }, {
        "@": API,
        "id": "1042605427",
        "predicate": "payments.bankCardData",
        "params": [{"name": "title", "type": "string"}, {"name": "open_urls", "type": "Vector<BankCardOpenUrl>"}],
        "type": "payments.BankCardData"
    }, {
        "@": API,
        "id": "-118740917",
        "predicate": "peerSelfLocated",
        "params": [{"name": "expires", "type": "int"}],
        "type": "PeerLocated"
    }, {
        "@": API,
        "id": "1949890536",
        "predicate": "dialogFilter",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "contacts",
            "type": "flags.0?true"
        }, {"name": "non_contacts", "type": "flags.1?true"}, {
            "name": "groups",
            "type": "flags.2?true"
        }, {"name": "broadcasts", "type": "flags.3?true"}, {
            "name": "bots",
            "type": "flags.4?true"
        }, {"name": "exclude_muted", "type": "flags.11?true"}, {
            "name": "exclude_read",
            "type": "flags.12?true"
        }, {"name": "exclude_archived", "type": "flags.13?true"}, {"name": "id", "type": "int"}, {
            "name": "title",
            "type": "string"
        }, {"name": "emoticon", "type": "flags.25?string"}, {
            "name": "pinned_peers",
            "type": "Vector<InputPeer>"
        }, {"name": "include_peers", "type": "Vector<InputPeer>"}, {
            "name": "exclude_peers",
            "type": "Vector<InputPeer>"
        }],
        "type": "DialogFilter"
    }, {
        "@": API,
        "id": "2004110666",
        "predicate": "dialogFilterSuggested",
        "params": [{"name": "filter", "type": "DialogFilter"}, {"name": "description", "type": "string"}],
        "type": "DialogFilterSuggested"
    }, {
        "@": API,
        "id": "654302845",
        "predicate": "updateDialogFilter",
        "params": [{"name": "flags", "type": "#"}, {"name": "id", "type": "int"}, {
            "name": "filter",
            "type": "flags.0?DialogFilter"
        }],
        "type": "Update"
    }, {
        "@": API,
        "id": "-1512627963",
        "predicate": "updateDialogFilterOrder",
        "params": [{"name": "order", "type": "Vector<int>"}],
        "type": "Update"
    }, {"id": "889491791", "predicate": "updateDialogFilters", "params": [], "type": "Update"}, {
        "@": API,
        "id": "-1237848657",
        "predicate": "statsDateRangeDays",
        "params": [{"name": "min_date", "type": "int"}, {"name": "max_date", "type": "int"}],
        "type": "StatsDateRangeDays"
    }, {
        "@": API,
        "id": "-884757282",
        "predicate": "statsAbsValueAndPrev",
        "params": [{"name": "current", "type": "double"}, {"name": "previous", "type": "double"}],
        "type": "StatsAbsValueAndPrev"
    }, {
        "@": API,
        "id": "-875679776",
        "predicate": "statsPercentValue",
        "params": [{"name": "part", "type": "double"}, {"name": "total", "type": "double"}],
        "type": "StatsPercentValue"
    }, {
        "@": API,
        "id": "1244130093",
        "predicate": "statsGraphAsync",
        "params": [{"name": "token", "type": "string"}],
        "type": "StatsGraph"
    }, {
        "@": API,
        "id": "-1092839390",
        "predicate": "statsGraphError",
        "params": [{"name": "error", "type": "string"}],
        "type": "StatsGraph"
    }, {
        "@": API,
        "id": "-1901828938",
        "predicate": "statsGraph",
        "params": [{"name": "flags", "type": "#"}, {"name": "json", "type": "DataJSON"}, {
            "name": "zoom_token",
            "type": "flags.0?string"
        }],
        "type": "StatsGraph"
    }, {
        "@": API,
        "id": "-1387279939",
        "predicate": "messageInteractionCounters",
        "params": [{"name": "msg_id", "type": "int"}, {"name": "views", "type": "int"}, {
            "name": "forwards",
            "type": "int"
        }],
        "type": "MessageInteractionCounters"
    }, {
        "@": API,
        "id": "-1107852396",
        "predicate": "stats.broadcastStats",
        "params": [{"name": "period", "type": "StatsDateRangeDays"}, {
            "name": "followers",
            "type": "StatsAbsValueAndPrev"
        }, {"name": "views_per_post", "type": "StatsAbsValueAndPrev"}, {
            "name": "shares_per_post",
            "type": "StatsAbsValueAndPrev"
        }, {"name": "enabled_notifications", "type": "StatsPercentValue"}, {
            "name": "growth_graph",
            "type": "StatsGraph"
        }, {"name": "followers_graph", "type": "StatsGraph"}, {
            "name": "mute_graph",
            "type": "StatsGraph"
        }, {"name": "top_hours_graph", "type": "StatsGraph"}, {
            "name": "interactions_graph",
            "type": "StatsGraph"
        }, {"name": "iv_interactions_graph", "type": "StatsGraph"}, {
            "name": "views_by_source_graph",
            "type": "StatsGraph"
        }, {"name": "new_followers_by_source_graph", "type": "StatsGraph"}, {
            "name": "languages_graph",
            "type": "StatsGraph"
        }, {"name": "recent_message_interactions", "type": "Vector<MessageInteractionCounters>"}],
        "type": "stats.BroadcastStats"
    }, {
        "@": API,
        "id": "-428884101",
        "predicate": "inputMediaDice",
        "params": [{"name": "emoticon", "type": "string"}],
        "type": "InputMedia"
    }, {
        "@": API,
        "id": "1065280907",
        "predicate": "messageMediaDice",
        "params": [{"name": "value", "type": "int"}, {"name": "emoticon", "type": "string"}],
        "type": "MessageMedia"
    }, {
        "@": API,
        "id": "-427863538",
        "predicate": "inputStickerSetDice",
        "params": [{"name": "emoticon", "type": "string"}],
        "type": "InputStickerSet"
    }, {
        "@": API,
        "id": "-1728664459",
        "predicate": "help.promoDataEmpty",
        "params": [{"name": "expires", "type": "int"}],
        "type": "help.PromoData"
    }, {
        "@": API,
        "id": "-1942390465",
        "predicate": "help.promoData",
        "params": [{"name": "flags", "type": "#"}, {"name": "proxy", "type": "flags.0?true"}, {
            "name": "expires",
            "type": "int"
        }, {"name": "peer", "type": "Peer"}, {"name": "chats", "type": "Vector<Chat>"}, {
            "name": "users",
            "type": "Vector<User>"
        }, {"name": "psa_type", "type": "flags.1?string"}, {"name": "psa_message", "type": "flags.2?string"}],
        "type": "help.PromoData"
    }],
    "methods": [{
        "@": API,
        "id": "-878758099",
        "method": "invokeAfterMsg",
        "params": [{"name": "msg_id", "type": "long"}, {"name": "query", "type": "!X"}],
        "type": "X"
    }, {
        "@": API,
        "id": "1036301552",
        "method": "invokeAfterMsgs",
        "params": [{"name": "msg_ids", "type": "Vector<long>"}, {"name": "query", "type": "!X"}],
        "type": "X"
    }, {
        "@": API,
        "id": "-1502141361",
        "method": "auth.sendCode",
        "params": [{"name": "phone_number", "type": "string"}, {"name": "api_id", "type": "int"}, {
            "name": "api_hash",
            "type": "string"
        }, {"name": "settings", "type": "CodeSettings"}],
        "type": "auth.SentCode"
    }, {
        "@": API,
        "id": "-2131827673",
        "method": "auth.signUp",
        "params": [{"name": "phone_number", "type": "string"}, {
            "name": "phone_code_hash",
            "type": "string"
        }, {"name": "first_name", "type": "string"}, {"name": "last_name", "type": "string"}],
        "type": "auth.Authorization"
    }, {
        "@": API,
        "id": "-1126886015",
        "method": "auth.signIn",
        "params": [{"name": "phone_number", "type": "string"}, {
            "name": "phone_code_hash",
            "type": "string"
        }, {"name": "phone_code", "type": "string"}],
        "type": "auth.Authorization"
    }, {"id": "1461180992", "method": "auth.logOut", "params": [], "type": "Bool"}, {
        "@": API,
        "id": "-1616179942",
        "method": "auth.resetAuthorizations",
        "params": [],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-440401971",
        "method": "auth.exportAuthorization",
        "params": [{"name": "dc_id", "type": "int"}],
        "type": "auth.ExportedAuthorization"
    }, {
        "@": API,
        "id": "-470837741",
        "method": "auth.importAuthorization",
        "params": [{"name": "id", "type": "int"}, {"name": "bytes", "type": "bytes"}],
        "type": "auth.Authorization"
    }, {
        "@": API,
        "id": "-841733627",
        "method": "auth.bindTempAuthKey",
        "params": [{"name": "perm_auth_key_id", "type": "long"}, {
            "name": "nonce",
            "type": "long"
        }, {"name": "expires_at", "type": "int"}, {"name": "encrypted_message", "type": "bytes"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "1754754159",
        "method": "account.registerDevice",
        "params": [{"name": "flags", "type": "#"}, {"name": "no_muted", "type": "flags.0?true"}, {
            "name": "token_type",
            "type": "int"
        }, {"name": "token", "type": "string"}, {"name": "app_sandbox", "type": "Bool"}, {
            "name": "secret",
            "type": "bytes"
        }, {"name": "other_uids", "type": "Vector<int>"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "813089983",
        "method": "account.unregisterDevice",
        "params": [{"name": "token_type", "type": "int"}, {"name": "token", "type": "string"}, {
            "name": "other_uids",
            "type": "Vector<int>"
        }],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-2067899501",
        "method": "account.updateNotifySettings",
        "params": [{"name": "peer", "type": "InputNotifyPeer"}, {
            "name": "settings",
            "type": "InputPeerNotifySettings"
        }],
        "type": "Bool"
    }, {
        "@": API,
        "id": "313765169",
        "method": "account.getNotifySettings",
        "params": [{"name": "peer", "type": "InputNotifyPeer"}],
        "type": "PeerNotifySettings"
    }, {"id": "-612493497", "method": "account.resetNotifySettings", "params": [], "type": "Bool"}, {
        "@": API,
        "id": "2018596725",
        "method": "account.updateProfile",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "first_name",
            "type": "flags.0?string"
        }, {"name": "last_name", "type": "flags.1?string"}, {"name": "about", "type": "flags.2?string"}],
        "type": "User"
    }, {
        "@": API,
        "id": "1713919532",
        "method": "account.updateStatus",
        "params": [{"name": "offline", "type": "Bool"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-1430579357",
        "method": "account.getWallPapers",
        "params": [{"name": "hash", "type": "int"}],
        "type": "account.WallPapers"
    }, {
        "@": API,
        "id": "-1374118561",
        "method": "account.reportPeer",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "reason", "type": "ReportReason"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "227648840",
        "method": "users.getUsers",
        "params": [{"name": "id", "type": "Vector<InputUser>"}],
        "type": "Vector<User>"
    }, {
        "@": API,
        "id": "-902781519",
        "method": "users.getFullUser",
        "params": [{"name": "id", "type": "InputUser"}],
        "type": "UserFull"
    }, {
        "@": API,
        "id": "749357634",
        "method": "contacts.getContactIDs",
        "params": [{"name": "hash", "type": "int"}],
        "type": "Vector<int>"
    }, {
        "@": API,
        "id": "-995929106",
        "method": "contacts.getStatuses",
        "params": [],
        "type": "Vector<ContactStatus>"
    }, {
        "@": API,
        "id": "-1071414113",
        "method": "contacts.getContacts",
        "params": [{"name": "hash", "type": "int"}],
        "type": "contacts.Contacts"
    }, {
        "@": API,
        "id": "746589157",
        "method": "contacts.importContacts",
        "params": [{"name": "contacts", "type": "Vector<InputContact>"}],
        "type": "contacts.ImportedContacts"
    }, {
        "@": API,
        "id": "157945344",
        "method": "contacts.deleteContacts",
        "params": [{"name": "id", "type": "Vector<InputUser>"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "269745566",
        "method": "contacts.deleteByPhones",
        "params": [{"name": "phones", "type": "Vector<string>"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "858475004",
        "method": "contacts.block",
        "params": [{"name": "id", "type": "InputUser"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-448724803",
        "method": "contacts.unblock",
        "params": [{"name": "id", "type": "InputUser"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-176409329",
        "method": "contacts.getBlocked",
        "params": [{"name": "offset", "type": "int"}, {"name": "limit", "type": "int"}],
        "type": "contacts.Blocked"
    }, {
        "@": API,
        "id": "1673946374",
        "method": "messages.getMessages",
        "params": [{"name": "id", "type": "Vector<InputMessage>"}],
        "type": "messages.Messages"
    }, {
        "@": API,
        "id": "-1594999949",
        "method": "messages.getDialogs",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "exclude_pinned",
            "type": "flags.0?true"
        }, {"name": "folder_id", "type": "flags.1?int"}, {"name": "offset_date", "type": "int"}, {
            "name": "offset_id",
            "type": "int"
        }, {"name": "offset_peer", "type": "InputPeer"}, {"name": "limit", "type": "int"}, {
            "name": "hash",
            "type": "int"
        }],
        "type": "messages.Dialogs"
    }, {
        "@": API,
        "id": "-591691168",
        "method": "messages.getHistory",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "offset_id", "type": "int"}, {
            "name": "offset_date",
            "type": "int"
        }, {"name": "add_offset", "type": "int"}, {"name": "limit", "type": "int"}, {
            "name": "max_id",
            "type": "int"
        }, {"name": "min_id", "type": "int"}, {"name": "hash", "type": "int"}],
        "type": "messages.Messages"
    }, {
        "@": API,
        "id": "-2045448344",
        "method": "messages.search",
        "params": [{"name": "flags", "type": "#"}, {"name": "peer", "type": "InputPeer"}, {
            "name": "q",
            "type": "string"
        }, {"name": "from_id", "type": "flags.0?InputUser"}, {
            "name": "filter",
            "type": "MessagesFilter"
        }, {"name": "min_date", "type": "int"}, {"name": "max_date", "type": "int"}, {
            "name": "offset_id",
            "type": "int"
        }, {"name": "add_offset", "type": "int"}, {"name": "limit", "type": "int"}, {
            "name": "max_id",
            "type": "int"
        }, {"name": "min_id", "type": "int"}, {"name": "hash", "type": "int"}],
        "type": "messages.Messages"
    }, {
        "@": API,
        "id": "238054714",
        "method": "messages.readHistory",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "max_id", "type": "int"}],
        "type": "messages.AffectedMessages"
    }, {
        "@": API,
        "id": "469850889",
        "method": "messages.deleteHistory",
        "params": [{"name": "flags", "type": "#"}, {"name": "just_clear", "type": "flags.0?true"}, {
            "name": "revoke",
            "type": "flags.1?true"
        }, {"name": "peer", "type": "InputPeer"}, {"name": "max_id", "type": "int"}],
        "type": "messages.AffectedHistory"
    }, {
        "@": API,
        "id": "-443640366",
        "method": "messages.deleteMessages",
        "params": [{"name": "flags", "type": "#"}, {"name": "revoke", "type": "flags.0?true"}, {
            "name": "id",
            "type": "Vector<int>"
        }],
        "type": "messages.AffectedMessages"
    }, {
        "@": API,
        "id": "94983360",
        "method": "messages.receivedMessages",
        "params": [{"name": "max_id", "type": "int"}],
        "type": "Vector<ReceivedNotifyMessage>"
    }, {
        "@": API,
        "id": "-1551737264",
        "method": "messages.setTyping",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "action", "type": "SendMessageAction"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "1376532592",
        "method": "messages.sendMessage",
        "params": [{"name": "flags", "type": "#"}, {"name": "no_webpage", "type": "flags.1?true"}, {
            "name": "silent",
            "type": "flags.5?true"
        }, {"name": "background", "type": "flags.6?true"}, {
            "name": "clear_draft",
            "type": "flags.7?true"
        }, {"name": "peer", "type": "InputPeer"}, {
            "name": "reply_to_msg_id",
            "type": "flags.0?int"
        }, {"name": "message", "type": "string"}, {"name": "random_id", "type": "long"}, {
            "name": "reply_markup",
            "type": "flags.2?ReplyMarkup"
        }, {"name": "entities", "type": "flags.3?Vector<MessageEntity>"}, {
            "name": "schedule_date",
            "type": "flags.10?int"
        }],
        "type": "Updates"
    }, {
        "@": API,
        "id": "881978281",
        "method": "messages.sendMedia",
        "params": [{"name": "flags", "type": "#"}, {"name": "silent", "type": "flags.5?true"}, {
            "name": "background",
            "type": "flags.6?true"
        }, {"name": "clear_draft", "type": "flags.7?true"}, {
            "name": "peer",
            "type": "InputPeer"
        }, {"name": "reply_to_msg_id", "type": "flags.0?int"}, {
            "name": "media",
            "type": "InputMedia"
        }, {"name": "message", "type": "string"}, {"name": "random_id", "type": "long"}, {
            "name": "reply_markup",
            "type": "flags.2?ReplyMarkup"
        }, {"name": "entities", "type": "flags.3?Vector<MessageEntity>"}, {
            "name": "schedule_date",
            "type": "flags.10?int"
        }],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-637606386",
        "method": "messages.forwardMessages",
        "params": [{"name": "flags", "type": "#"}, {"name": "silent", "type": "flags.5?true"}, {
            "name": "background",
            "type": "flags.6?true"
        }, {"name": "with_my_score", "type": "flags.8?true"}, {"name": "from_peer", "type": "InputPeer"}, {
            "name": "id",
            "type": "Vector<int>"
        }, {"name": "random_id", "type": "Vector<long>"}, {
            "name": "to_peer",
            "type": "InputPeer"
        }, {"name": "schedule_date", "type": "flags.10?int"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-820669733",
        "method": "messages.reportSpam",
        "params": [{"name": "peer", "type": "InputPeer"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "913498268",
        "method": "messages.getPeerSettings",
        "params": [{"name": "peer", "type": "InputPeer"}],
        "type": "PeerSettings"
    }, {
        "@": API,
        "id": "-1115507112",
        "method": "messages.report",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "id", "type": "Vector<int>"}, {
            "name": "reason",
            "type": "ReportReason"
        }],
        "type": "Bool"
    }, {
        "@": API,
        "id": "1013621127",
        "method": "messages.getChats",
        "params": [{"name": "id", "type": "Vector<int>"}],
        "type": "messages.Chats"
    }, {
        "@": API,
        "id": "998448230",
        "method": "messages.getFullChat",
        "params": [{"name": "chat_id", "type": "int"}],
        "type": "messages.ChatFull"
    }, {
        "@": API,
        "id": "-599447467",
        "method": "messages.editChatTitle",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "title", "type": "string"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-900957736",
        "method": "messages.editChatPhoto",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "photo", "type": "InputChatPhoto"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-106911223",
        "method": "messages.addChatUser",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "user_id", "type": "InputUser"}, {
            "name": "fwd_limit",
            "type": "int"
        }],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-530505962",
        "method": "messages.deleteChatUser",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "user_id", "type": "InputUser"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "164303470",
        "method": "messages.createChat",
        "params": [{"name": "users", "type": "Vector<InputUser>"}, {"name": "title", "type": "string"}],
        "type": "Updates"
    }, {"id": "-304838614", "method": "updates.getState", "params": [], "type": "updates.State"}, {
        "@": API,
        "id": "630429265",
        "method": "updates.getDifference",
        "params": [{"name": "flags", "type": "#"}, {"name": "pts", "type": "int"}, {
            "name": "pts_total_limit",
            "type": "flags.0?int"
        }, {"name": "date", "type": "int"}, {"name": "qts", "type": "int"}],
        "type": "updates.Difference"
    }, {
        "@": API,
        "id": "-256159406",
        "method": "photos.updateProfilePhoto",
        "params": [{"name": "id", "type": "InputPhoto"}],
        "type": "UserProfilePhoto"
    }, {
        "@": API,
        "id": "1328726168",
        "method": "photos.uploadProfilePhoto",
        "params": [{"name": "file", "type": "InputFile"}],
        "type": "photos.Photo"
    }, {
        "@": API,
        "id": "-2016444625",
        "method": "photos.deletePhotos",
        "params": [{"name": "id", "type": "Vector<InputPhoto>"}],
        "type": "Vector<long>"
    }, {
        "@": API,
        "id": "-1291540959",
        "method": "upload.saveFilePart",
        "params": [{"name": "file_id", "type": "long"}, {"name": "file_part", "type": "int"}, {
            "name": "bytes",
            "type": "bytes"
        }],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-1319462148",
        "method": "upload.getFile",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "precise",
            "type": "flags.0?true"
        }, {"name": "cdn_supported", "type": "flags.1?true"}, {
            "name": "location",
            "type": "InputFileLocation"
        }, {"name": "offset", "type": "int"}, {"name": "limit", "type": "int"}],
        "type": "upload.File"
    }, {"id": "-990308245", "method": "help.getConfig", "params": [], "type": "Config"}, {
        "@": API,
        "id": "531836966",
        "method": "help.getNearestDc",
        "params": [],
        "type": "NearestDc"
    }, {
        "@": API,
        "id": "1378703997",
        "method": "help.getAppUpdate",
        "params": [{"name": "source", "type": "string"}],
        "type": "help.AppUpdate"
    }, {
        "@": API,
        "id": "1295590211",
        "method": "help.getInviteText",
        "params": [],
        "type": "help.InviteText"
    }, {
        "@": API,
        "id": "-1848823128",
        "method": "photos.getUserPhotos",
        "params": [{"name": "user_id", "type": "InputUser"}, {"name": "offset", "type": "int"}, {
            "name": "max_id",
            "type": "long"
        }, {"name": "limit", "type": "int"}],
        "type": "photos.Photos"
    }, {
        "@": API,
        "id": "651135312",
        "method": "messages.getDhConfig",
        "params": [{"name": "version", "type": "int"}, {"name": "random_length", "type": "int"}],
        "type": "messages.DhConfig"
    }, {
        "@": API,
        "id": "-162681021",
        "method": "messages.requestEncryption",
        "params": [{"name": "user_id", "type": "InputUser"}, {"name": "random_id", "type": "int"}, {
            "name": "g_a",
            "type": "bytes"
        }],
        "type": "EncryptedChat"
    }, {
        "@": API,
        "id": "1035731989",
        "method": "messages.acceptEncryption",
        "params": [{"name": "peer", "type": "InputEncryptedChat"}, {
            "name": "g_b",
            "type": "bytes"
        }, {"name": "key_fingerprint", "type": "long"}],
        "type": "EncryptedChat"
    }, {
        "@": API,
        "id": "-304536635",
        "method": "messages.discardEncryption",
        "params": [{"name": "chat_id", "type": "int"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "2031374829",
        "method": "messages.setEncryptedTyping",
        "params": [{"name": "peer", "type": "InputEncryptedChat"}, {"name": "typing", "type": "Bool"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "2135648522",
        "method": "messages.readEncryptedHistory",
        "params": [{"name": "peer", "type": "InputEncryptedChat"}, {"name": "max_date", "type": "int"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-1451792525",
        "method": "messages.sendEncrypted",
        "params": [{"name": "peer", "type": "InputEncryptedChat"}, {
            "name": "random_id",
            "type": "long"
        }, {"name": "data", "type": "bytes"}],
        "type": "messages.SentEncryptedMessage"
    }, {
        "@": API,
        "id": "-1701831834",
        "method": "messages.sendEncryptedFile",
        "params": [{"name": "peer", "type": "InputEncryptedChat"}, {
            "name": "random_id",
            "type": "long"
        }, {"name": "data", "type": "bytes"}, {"name": "file", "type": "InputEncryptedFile"}],
        "type": "messages.SentEncryptedMessage"
    }, {
        "@": API,
        "id": "852769188",
        "method": "messages.sendEncryptedService",
        "params": [{"name": "peer", "type": "InputEncryptedChat"}, {
            "name": "random_id",
            "type": "long"
        }, {"name": "data", "type": "bytes"}],
        "type": "messages.SentEncryptedMessage"
    }, {
        "@": API,
        "id": "1436924774",
        "method": "messages.receivedQueue",
        "params": [{"name": "max_qts", "type": "int"}],
        "type": "Vector<long>"
    }, {
        "@": API,
        "id": "1259113487",
        "method": "messages.reportEncryptedSpam",
        "params": [{"name": "peer", "type": "InputEncryptedChat"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-562337987",
        "method": "upload.saveBigFilePart",
        "params": [{"name": "file_id", "type": "long"}, {
            "name": "file_part",
            "type": "int"
        }, {"name": "file_total_parts", "type": "int"}, {"name": "bytes", "type": "bytes"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-1043505495",
        "method": "initConnection",
        "params": [{"name": "flags", "type": "#"}, {"name": "api_id", "type": "int"}, {
            "name": "device_model",
            "type": "string"
        }, {"name": "system_version", "type": "string"}, {
            "name": "app_version",
            "type": "string"
        }, {"name": "system_lang_code", "type": "string"}, {
            "name": "lang_pack",
            "type": "string"
        }, {"name": "lang_code", "type": "string"}, {
            "name": "proxy",
            "type": "flags.0?InputClientProxy"
        }, {"name": "params", "type": "flags.1?JSONValue"}, {"name": "query", "type": "!X"}],
        "type": "X"
    }, {"id": "-1663104819", "method": "help.getSupport", "params": [], "type": "help.Support"}, {
        "@": API,
        "id": "916930423",
        "method": "messages.readMessageContents",
        "params": [{"name": "id", "type": "Vector<int>"}],
        "type": "messages.AffectedMessages"
    }, {
        "@": API,
        "id": "655677548",
        "method": "account.checkUsername",
        "params": [{"name": "username", "type": "string"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "1040964988",
        "method": "account.updateUsername",
        "params": [{"name": "username", "type": "string"}],
        "type": "User"
    }, {
        "@": API,
        "id": "301470424",
        "method": "contacts.search",
        "params": [{"name": "q", "type": "string"}, {"name": "limit", "type": "int"}],
        "type": "contacts.Found"
    }, {
        "@": API,
        "id": "-623130288",
        "method": "account.getPrivacy",
        "params": [{"name": "key", "type": "InputPrivacyKey"}],
        "type": "account.PrivacyRules"
    }, {
        "@": API,
        "id": "-906486552",
        "method": "account.setPrivacy",
        "params": [{"name": "key", "type": "InputPrivacyKey"}, {"name": "rules", "type": "Vector<InputPrivacyRule>"}],
        "type": "account.PrivacyRules"
    }, {
        "@": API,
        "id": "1099779595",
        "method": "account.deleteAccount",
        "params": [{"name": "reason", "type": "string"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "150761757",
        "method": "account.getAccountTTL",
        "params": [],
        "type": "AccountDaysTTL"
    }, {
        "@": API,
        "id": "608323678",
        "method": "account.setAccountTTL",
        "params": [{"name": "ttl", "type": "AccountDaysTTL"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-627372787",
        "method": "invokeWithLayer",
        "params": [{"name": "layer", "type": "int"}, {"name": "query", "type": "!X"}],
        "type": "X"
    }, {
        "@": API,
        "id": "-113456221",
        "method": "contacts.resolveUsername",
        "params": [{"name": "username", "type": "string"}],
        "type": "contacts.ResolvedPeer"
    }, {
        "@": API,
        "id": "-2108208411",
        "method": "account.sendChangePhoneCode",
        "params": [{"name": "phone_number", "type": "string"}, {"name": "settings", "type": "CodeSettings"}],
        "type": "auth.SentCode"
    }, {
        "@": API,
        "id": "1891839707",
        "method": "account.changePhone",
        "params": [{"name": "phone_number", "type": "string"}, {
            "name": "phone_code_hash",
            "type": "string"
        }, {"name": "phone_code", "type": "string"}],
        "type": "User"
    }, {
        "@": API,
        "id": "71126828",
        "method": "messages.getStickers",
        "params": [{"name": "emoticon", "type": "string"}, {"name": "hash", "type": "int"}],
        "type": "messages.Stickers"
    }, {
        "@": API,
        "id": "479598769",
        "method": "messages.getAllStickers",
        "params": [{"name": "hash", "type": "int"}],
        "type": "messages.AllStickers"
    }, {
        "@": API,
        "id": "954152242",
        "method": "account.updateDeviceLocked",
        "params": [{"name": "period", "type": "int"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "1738800940",
        "method": "auth.importBotAuthorization",
        "params": [{"name": "flags", "type": "int"}, {"name": "api_id", "type": "int"}, {
            "name": "api_hash",
            "type": "string"
        }, {"name": "bot_auth_token", "type": "string"}],
        "type": "auth.Authorization"
    }, {
        "@": API,
        "id": "-1956073268",
        "method": "messages.getWebPagePreview",
        "params": [{"name": "flags", "type": "#"}, {"name": "message", "type": "string"}, {
            "name": "entities",
            "type": "flags.3?Vector<MessageEntity>"
        }],
        "type": "MessageMedia"
    }, {
        "@": API,
        "id": "-484392616",
        "method": "account.getAuthorizations",
        "params": [],
        "type": "account.Authorizations"
    }, {
        "@": API,
        "id": "-545786948",
        "method": "account.resetAuthorization",
        "params": [{"name": "hash", "type": "long"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "1418342645",
        "method": "account.getPassword",
        "params": [],
        "type": "account.Password"
    }, {
        "@": API,
        "id": "-1663767815",
        "method": "account.getPasswordSettings",
        "params": [{"name": "password", "type": "InputCheckPasswordSRP"}],
        "type": "account.PasswordSettings"
    }, {
        "@": API,
        "id": "-1516564433",
        "method": "account.updatePasswordSettings",
        "params": [{"name": "password", "type": "InputCheckPasswordSRP"}, {
            "name": "new_settings",
            "type": "account.PasswordInputSettings"
        }],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-779399914",
        "method": "auth.checkPassword",
        "params": [{"name": "password", "type": "InputCheckPasswordSRP"}],
        "type": "auth.Authorization"
    }, {
        "@": API,
        "id": "-661144474",
        "method": "auth.requestPasswordRecovery",
        "params": [],
        "type": "auth.PasswordRecovery"
    }, {
        "@": API,
        "id": "1319464594",
        "method": "auth.recoverPassword",
        "params": [{"name": "code", "type": "string"}],
        "type": "auth.Authorization"
    }, {
        "@": API,
        "id": "-1080796745",
        "method": "invokeWithoutUpdates",
        "params": [{"name": "query", "type": "!X"}],
        "type": "X"
    }, {
        "@": API,
        "id": "234312524",
        "method": "messages.exportChatInvite",
        "params": [{"name": "peer", "type": "InputPeer"}],
        "type": "ExportedChatInvite"
    }, {
        "@": API,
        "id": "1051570619",
        "method": "messages.checkChatInvite",
        "params": [{"name": "hash", "type": "string"}],
        "type": "ChatInvite"
    }, {
        "@": API,
        "id": "1817183516",
        "method": "messages.importChatInvite",
        "params": [{"name": "hash", "type": "string"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "639215886",
        "method": "messages.getStickerSet",
        "params": [{"name": "stickerset", "type": "InputStickerSet"}],
        "type": "messages.StickerSet"
    }, {
        "@": API,
        "id": "-946871200",
        "method": "messages.installStickerSet",
        "params": [{"name": "stickerset", "type": "InputStickerSet"}, {"name": "archived", "type": "Bool"}],
        "type": "messages.StickerSetInstallResult"
    }, {
        "@": API,
        "id": "-110209570",
        "method": "messages.uninstallStickerSet",
        "params": [{"name": "stickerset", "type": "InputStickerSet"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-421563528",
        "method": "messages.startBot",
        "params": [{"name": "bot", "type": "InputUser"}, {"name": "peer", "type": "InputPeer"}, {
            "name": "random_id",
            "type": "long"
        }, {"name": "start_param", "type": "string"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-1877938321",
        "method": "help.getAppChangelog",
        "params": [{"name": "prev_app_version", "type": "string"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-993483427",
        "method": "messages.getMessagesViews",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "id", "type": "Vector<int>"}, {
            "name": "increment",
            "type": "Bool"
        }],
        "type": "Vector<int>"
    }, {
        "@": API,
        "id": "-871347913",
        "method": "channels.readHistory",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "max_id", "type": "int"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-2067661490",
        "method": "channels.deleteMessages",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "id", "type": "Vector<int>"}],
        "type": "messages.AffectedMessages"
    }, {
        "@": API,
        "id": "-787622117",
        "method": "channels.deleteUserHistory",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "user_id", "type": "InputUser"}],
        "type": "messages.AffectedHistory"
    }, {
        "@": API,
        "id": "-32999408",
        "method": "channels.reportSpam",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "user_id", "type": "InputUser"}, {
            "name": "id",
            "type": "Vector<int>"
        }],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-1383294429",
        "method": "channels.getMessages",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "id", "type": "Vector<InputMessage>"}],
        "type": "messages.Messages"
    }, {
        "@": API,
        "id": "306054633",
        "method": "channels.getParticipants",
        "params": [{"name": "channel", "type": "InputChannel"}, {
            "name": "filter",
            "type": "ChannelParticipantsFilter"
        }, {"name": "offset", "type": "int"}, {"name": "limit", "type": "int"}, {"name": "hash", "type": "int"}],
        "type": "channels.ChannelParticipants"
    }, {
        "@": API,
        "id": "1416484774",
        "method": "channels.getParticipant",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "user_id", "type": "InputUser"}],
        "type": "channels.ChannelParticipant"
    }, {
        "@": API,
        "id": "176122811",
        "method": "channels.getChannels",
        "params": [{"name": "id", "type": "Vector<InputChannel>"}],
        "type": "messages.Chats"
    }, {
        "@": API,
        "id": "141781513",
        "method": "channels.getFullChannel",
        "params": [{"name": "channel", "type": "InputChannel"}],
        "type": "messages.ChatFull"
    }, {
        "@": API,
        "id": "1029681423",
        "method": "channels.createChannel",
        "params": [{"name": "flags", "type": "#"}, {"name": "broadcast", "type": "flags.0?true"}, {
            "name": "megagroup",
            "type": "flags.1?true"
        }, {"name": "title", "type": "string"}, {"name": "about", "type": "string"}, {
            "name": "geo_point",
            "type": "flags.2?InputGeoPoint"
        }, {"name": "address", "type": "flags.2?string"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-751007486",
        "method": "channels.editAdmin",
        "params": [{"name": "channel", "type": "InputChannel"}, {
            "name": "user_id",
            "type": "InputUser"
        }, {"name": "admin_rights", "type": "ChatAdminRights"}, {"name": "rank", "type": "string"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "1450044624",
        "method": "channels.editTitle",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "title", "type": "string"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-248621111",
        "method": "channels.editPhoto",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "photo", "type": "InputChatPhoto"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "283557164",
        "method": "channels.checkUsername",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "username", "type": "string"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "890549214",
        "method": "channels.updateUsername",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "username", "type": "string"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "615851205",
        "method": "channels.joinChannel",
        "params": [{"name": "channel", "type": "InputChannel"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-130635115",
        "method": "channels.leaveChannel",
        "params": [{"name": "channel", "type": "InputChannel"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "429865580",
        "method": "channels.inviteToChannel",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "users", "type": "Vector<InputUser>"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-1072619549",
        "method": "channels.deleteChannel",
        "params": [{"name": "channel", "type": "InputChannel"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "51854712",
        "method": "updates.getChannelDifference",
        "params": [{"name": "flags", "type": "#"}, {"name": "force", "type": "flags.0?true"}, {
            "name": "channel",
            "type": "InputChannel"
        }, {"name": "filter", "type": "ChannelMessagesFilter"}, {"name": "pts", "type": "int"}, {
            "name": "limit",
            "type": "int"
        }],
        "type": "updates.ChannelDifference"
    }, {
        "@": API,
        "id": "-1444503762",
        "method": "messages.editChatAdmin",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "user_id", "type": "InputUser"}, {
            "name": "is_admin",
            "type": "Bool"
        }],
        "type": "Bool"
    }, {
        "@": API,
        "id": "363051235",
        "method": "messages.migrateChat",
        "params": [{"name": "chat_id", "type": "int"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-1083038300",
        "method": "messages.searchGlobal",
        "params": [{"name": "flags", "type": "#"}, {"name": "folder_id", "type": "flags.0?int"}, {
            "name": "q",
            "type": "string"
        }, {"name": "offset_rate", "type": "int"}, {"name": "offset_peer", "type": "InputPeer"}, {
            "name": "offset_id",
            "type": "int"
        }, {"name": "limit", "type": "int"}],
        "type": "messages.Messages"
    }, {
        "@": API,
        "id": "2016638777",
        "method": "messages.reorderStickerSets",
        "params": [{"name": "flags", "type": "#"}, {"name": "masks", "type": "flags.0?true"}, {
            "name": "order",
            "type": "Vector<long>"
        }],
        "type": "Bool"
    }, {
        "@": API,
        "id": "864953444",
        "method": "messages.getDocumentByHash",
        "params": [{"name": "sha256", "type": "bytes"}, {"name": "size", "type": "int"}, {
            "name": "mime_type",
            "type": "string"
        }],
        "type": "Document"
    }, {
        "@": API,
        "id": "-1080395925",
        "method": "messages.searchGifs",
        "params": [{"name": "q", "type": "string"}, {"name": "offset", "type": "int"}],
        "type": "messages.FoundGifs"
    }, {
        "@": API,
        "id": "-2084618926",
        "method": "messages.getSavedGifs",
        "params": [{"name": "hash", "type": "int"}],
        "type": "messages.SavedGifs"
    }, {
        "@": API,
        "id": "846868683",
        "method": "messages.saveGif",
        "params": [{"name": "id", "type": "InputDocument"}, {"name": "unsave", "type": "Bool"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "1364105629",
        "method": "messages.getInlineBotResults",
        "params": [{"name": "flags", "type": "#"}, {"name": "bot", "type": "InputUser"}, {
            "name": "peer",
            "type": "InputPeer"
        }, {"name": "geo_point", "type": "flags.0?InputGeoPoint"}, {
            "name": "query",
            "type": "string"
        }, {"name": "offset", "type": "string"}],
        "type": "messages.BotResults"
    }, {
        "@": API,
        "id": "-346119674",
        "method": "messages.setInlineBotResults",
        "params": [{"name": "flags", "type": "#"}, {"name": "gallery", "type": "flags.0?true"}, {
            "name": "private",
            "type": "flags.1?true"
        }, {"name": "query_id", "type": "long"}, {
            "name": "results",
            "type": "Vector<InputBotInlineResult>"
        }, {"name": "cache_time", "type": "int"}, {
            "name": "next_offset",
            "type": "flags.2?string"
        }, {"name": "switch_pm", "type": "flags.3?InlineBotSwitchPM"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "570955184",
        "method": "messages.sendInlineBotResult",
        "params": [{"name": "flags", "type": "#"}, {"name": "silent", "type": "flags.5?true"}, {
            "name": "background",
            "type": "flags.6?true"
        }, {"name": "clear_draft", "type": "flags.7?true"}, {
            "name": "hide_via",
            "type": "flags.11?true"
        }, {"name": "peer", "type": "InputPeer"}, {
            "name": "reply_to_msg_id",
            "type": "flags.0?int"
        }, {"name": "random_id", "type": "long"}, {"name": "query_id", "type": "long"}, {
            "name": "id",
            "type": "string"
        }, {"name": "schedule_date", "type": "flags.10?int"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-826838685",
        "method": "channels.exportMessageLink",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "id", "type": "int"}, {
            "name": "grouped",
            "type": "Bool"
        }],
        "type": "ExportedMessageLink"
    }, {
        "@": API,
        "id": "527021574",
        "method": "channels.toggleSignatures",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "enabled", "type": "Bool"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "1056025023",
        "method": "auth.resendCode",
        "params": [{"name": "phone_number", "type": "string"}, {"name": "phone_code_hash", "type": "string"}],
        "type": "auth.SentCode"
    }, {
        "@": API,
        "id": "520357240",
        "method": "auth.cancelCode",
        "params": [{"name": "phone_number", "type": "string"}, {"name": "phone_code_hash", "type": "string"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-39416522",
        "method": "messages.getMessageEditData",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "id", "type": "int"}],
        "type": "messages.MessageEditData"
    }, {
        "@": API,
        "id": "1224152952",
        "method": "messages.editMessage",
        "params": [{"name": "flags", "type": "#"}, {"name": "no_webpage", "type": "flags.1?true"}, {
            "name": "peer",
            "type": "InputPeer"
        }, {"name": "id", "type": "int"}, {"name": "message", "type": "flags.11?string"}, {
            "name": "media",
            "type": "flags.14?InputMedia"
        }, {"name": "reply_markup", "type": "flags.2?ReplyMarkup"}, {
            "name": "entities",
            "type": "flags.3?Vector<MessageEntity>"
        }, {"name": "schedule_date", "type": "flags.15?int"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-2091549254",
        "method": "messages.editInlineBotMessage",
        "params": [{"name": "flags", "type": "#"}, {"name": "no_webpage", "type": "flags.1?true"}, {
            "name": "id",
            "type": "InputBotInlineMessageID"
        }, {"name": "message", "type": "flags.11?string"}, {
            "name": "media",
            "type": "flags.14?InputMedia"
        }, {"name": "reply_markup", "type": "flags.2?ReplyMarkup"}, {
            "name": "entities",
            "type": "flags.3?Vector<MessageEntity>"
        }],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-2130010132",
        "method": "messages.getBotCallbackAnswer",
        "params": [{"name": "flags", "type": "#"}, {"name": "game", "type": "flags.1?true"}, {
            "name": "peer",
            "type": "InputPeer"
        }, {"name": "msg_id", "type": "int"}, {"name": "data", "type": "flags.0?bytes"}],
        "type": "messages.BotCallbackAnswer"
    }, {
        "@": API,
        "id": "-712043766",
        "method": "messages.setBotCallbackAnswer",
        "params": [{"name": "flags", "type": "#"}, {"name": "alert", "type": "flags.1?true"}, {
            "name": "query_id",
            "type": "long"
        }, {"name": "message", "type": "flags.0?string"}, {
            "name": "url",
            "type": "flags.2?string"
        }, {"name": "cache_time", "type": "int"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-728224331",
        "method": "contacts.getTopPeers",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "correspondents",
            "type": "flags.0?true"
        }, {"name": "bots_pm", "type": "flags.1?true"}, {
            "name": "bots_inline",
            "type": "flags.2?true"
        }, {"name": "phone_calls", "type": "flags.3?true"}, {
            "name": "forward_users",
            "type": "flags.4?true"
        }, {"name": "forward_chats", "type": "flags.5?true"}, {
            "name": "groups",
            "type": "flags.10?true"
        }, {"name": "channels", "type": "flags.15?true"}, {"name": "offset", "type": "int"}, {
            "name": "limit",
            "type": "int"
        }, {"name": "hash", "type": "int"}],
        "type": "contacts.TopPeers"
    }, {
        "@": API,
        "id": "451113900",
        "method": "contacts.resetTopPeerRating",
        "params": [{"name": "category", "type": "TopPeerCategory"}, {"name": "peer", "type": "InputPeer"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-462373635",
        "method": "messages.getPeerDialogs",
        "params": [{"name": "peers", "type": "Vector<InputDialogPeer>"}],
        "type": "messages.PeerDialogs"
    }, {
        "@": API,
        "id": "-1137057461",
        "method": "messages.saveDraft",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "no_webpage",
            "type": "flags.1?true"
        }, {"name": "reply_to_msg_id", "type": "flags.0?int"}, {
            "name": "peer",
            "type": "InputPeer"
        }, {"name": "message", "type": "string"}, {"name": "entities", "type": "flags.3?Vector<MessageEntity>"}],
        "type": "Bool"
    }, {"id": "1782549861", "method": "messages.getAllDrafts", "params": [], "type": "Updates"}, {
        "@": API,
        "id": "766298703",
        "method": "messages.getFeaturedStickers",
        "params": [{"name": "hash", "type": "int"}],
        "type": "messages.FeaturedStickers"
    }, {
        "@": API,
        "id": "1527873830",
        "method": "messages.readFeaturedStickers",
        "params": [{"name": "id", "type": "Vector<long>"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "1587647177",
        "method": "messages.getRecentStickers",
        "params": [{"name": "flags", "type": "#"}, {"name": "attached", "type": "flags.0?true"}, {
            "name": "hash",
            "type": "int"
        }],
        "type": "messages.RecentStickers"
    }, {
        "@": API,
        "id": "958863608",
        "method": "messages.saveRecentSticker",
        "params": [{"name": "flags", "type": "#"}, {"name": "attached", "type": "flags.0?true"}, {
            "name": "id",
            "type": "InputDocument"
        }, {"name": "unsave", "type": "Bool"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-1986437075",
        "method": "messages.clearRecentStickers",
        "params": [{"name": "flags", "type": "#"}, {"name": "attached", "type": "flags.0?true"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "1475442322",
        "method": "messages.getArchivedStickers",
        "params": [{"name": "flags", "type": "#"}, {"name": "masks", "type": "flags.0?true"}, {
            "name": "offset_id",
            "type": "long"
        }, {"name": "limit", "type": "int"}],
        "type": "messages.ArchivedStickers"
    }, {
        "@": API,
        "id": "457157256",
        "method": "account.sendConfirmPhoneCode",
        "params": [{"name": "hash", "type": "string"}, {"name": "settings", "type": "CodeSettings"}],
        "type": "auth.SentCode"
    }, {
        "@": API,
        "id": "1596029123",
        "method": "account.confirmPhone",
        "params": [{"name": "phone_code_hash", "type": "string"}, {"name": "phone_code", "type": "string"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-122669393",
        "method": "channels.getAdminedPublicChannels",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "by_location",
            "type": "flags.0?true"
        }, {"name": "check_limit", "type": "flags.1?true"}],
        "type": "messages.Chats"
    }, {
        "@": API,
        "id": "1706608543",
        "method": "messages.getMaskStickers",
        "params": [{"name": "hash", "type": "int"}],
        "type": "messages.AllStickers"
    }, {
        "@": API,
        "id": "-866424884",
        "method": "messages.getAttachedStickers",
        "params": [{"name": "media", "type": "InputStickeredMedia"}],
        "type": "Vector<StickerSetCovered>"
    }, {
        "@": API,
        "id": "-1907842680",
        "method": "auth.dropTempAuthKeys",
        "params": [{"name": "except_auth_keys", "type": "Vector<long>"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-1896289088",
        "method": "messages.setGameScore",
        "params": [{"name": "flags", "type": "#"}, {"name": "edit_message", "type": "flags.0?true"}, {
            "name": "force",
            "type": "flags.1?true"
        }, {"name": "peer", "type": "InputPeer"}, {"name": "id", "type": "int"}, {
            "name": "user_id",
            "type": "InputUser"
        }, {"name": "score", "type": "int"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "363700068",
        "method": "messages.setInlineGameScore",
        "params": [{"name": "flags", "type": "#"}, {"name": "edit_message", "type": "flags.0?true"}, {
            "name": "force",
            "type": "flags.1?true"
        }, {"name": "id", "type": "InputBotInlineMessageID"}, {
            "name": "user_id",
            "type": "InputUser"
        }, {"name": "score", "type": "int"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-400399203",
        "method": "messages.getGameHighScores",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "id", "type": "int"}, {
            "name": "user_id",
            "type": "InputUser"
        }],
        "type": "messages.HighScores"
    }, {
        "@": API,
        "id": "258170395",
        "method": "messages.getInlineGameHighScores",
        "params": [{"name": "id", "type": "InputBotInlineMessageID"}, {"name": "user_id", "type": "InputUser"}],
        "type": "messages.HighScores"
    }, {
        "@": API,
        "id": "218777796",
        "method": "messages.getCommonChats",
        "params": [{"name": "user_id", "type": "InputUser"}, {"name": "max_id", "type": "int"}, {
            "name": "limit",
            "type": "int"
        }],
        "type": "messages.Chats"
    }, {
        "@": API,
        "id": "-341307408",
        "method": "messages.getAllChats",
        "params": [{"name": "except_ids", "type": "Vector<int>"}],
        "type": "messages.Chats"
    }, {
        "@": API,
        "id": "-333262899",
        "method": "help.setBotUpdatesStatus",
        "params": [{"name": "pending_updates_count", "type": "int"}, {"name": "message", "type": "string"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "852135825",
        "method": "messages.getWebPage",
        "params": [{"name": "url", "type": "string"}, {"name": "hash", "type": "int"}],
        "type": "WebPage"
    }, {
        "@": API,
        "id": "-1489903017",
        "method": "messages.toggleDialogPin",
        "params": [{"name": "flags", "type": "#"}, {"name": "pinned", "type": "flags.0?true"}, {
            "name": "peer",
            "type": "InputDialogPeer"
        }],
        "type": "Bool"
    }, {
        "@": API,
        "id": "991616823",
        "method": "messages.reorderPinnedDialogs",
        "params": [{"name": "flags", "type": "#"}, {"name": "force", "type": "flags.0?true"}, {
            "name": "folder_id",
            "type": "int"
        }, {"name": "order", "type": "Vector<InputDialogPeer>"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-692498958",
        "method": "messages.getPinnedDialogs",
        "params": [{"name": "folder_id", "type": "int"}],
        "type": "messages.PeerDialogs"
    }, {
        "@": API,
        "id": "-1440257555",
        "method": "bots.sendCustomRequest",
        "params": [{"name": "custom_method", "type": "string"}, {"name": "params", "type": "DataJSON"}],
        "type": "DataJSON"
    }, {
        "@": API,
        "id": "-434028723",
        "method": "bots.answerWebhookJSONQuery",
        "params": [{"name": "query_id", "type": "long"}, {"name": "data", "type": "DataJSON"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "619086221",
        "method": "upload.getWebFile",
        "params": [{"name": "location", "type": "InputWebFileLocation"}, {
            "name": "offset",
            "type": "int"
        }, {"name": "limit", "type": "int"}],
        "type": "upload.WebFile"
    }, {
        "@": API,
        "id": "-1712285883",
        "method": "payments.getPaymentForm",
        "params": [{"name": "msg_id", "type": "int"}],
        "type": "payments.PaymentForm"
    }, {
        "@": API,
        "id": "-1601001088",
        "method": "payments.getPaymentReceipt",
        "params": [{"name": "msg_id", "type": "int"}],
        "type": "payments.PaymentReceipt"
    }, {
        "@": API,
        "id": "1997180532",
        "method": "payments.validateRequestedInfo",
        "params": [{"name": "flags", "type": "#"}, {"name": "save", "type": "flags.0?true"}, {
            "name": "msg_id",
            "type": "int"
        }, {"name": "info", "type": "PaymentRequestedInfo"}],
        "type": "payments.ValidatedRequestedInfo"
    }, {
        "@": API,
        "id": "730364339",
        "method": "payments.sendPaymentForm",
        "params": [{"name": "flags", "type": "#"}, {"name": "msg_id", "type": "int"}, {
            "name": "requested_info_id",
            "type": "flags.0?string"
        }, {"name": "shipping_option_id", "type": "flags.1?string"}, {
            "name": "credentials",
            "type": "InputPaymentCredentials"
        }],
        "type": "payments.PaymentResult"
    }, {
        "@": API,
        "id": "1151208273",
        "method": "account.getTmpPassword",
        "params": [{"name": "password", "type": "InputCheckPasswordSRP"}, {"name": "period", "type": "int"}],
        "type": "account.TmpPassword"
    }, {
        "@": API,
        "id": "578650699",
        "method": "payments.getSavedInfo",
        "params": [],
        "type": "payments.SavedInfo"
    }, {
        "@": API,
        "id": "-667062079",
        "method": "payments.clearSavedInfo",
        "params": [{"name": "flags", "type": "#"}, {"name": "credentials", "type": "flags.0?true"}, {
            "name": "info",
            "type": "flags.1?true"
        }],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-436833542",
        "method": "messages.setBotShippingResults",
        "params": [{"name": "flags", "type": "#"}, {"name": "query_id", "type": "long"}, {
            "name": "error",
            "type": "flags.0?string"
        }, {"name": "shipping_options", "type": "flags.1?Vector<ShippingOption>"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "163765653",
        "method": "messages.setBotPrecheckoutResults",
        "params": [{"name": "flags", "type": "#"}, {"name": "success", "type": "flags.1?true"}, {
            "name": "query_id",
            "type": "long"
        }, {"name": "error", "type": "flags.0?string"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-251435136",
        "method": "stickers.createStickerSet",
        "params": [{"name": "flags", "type": "#"}, {"name": "masks", "type": "flags.0?true"}, {
            "name": "animated",
            "type": "flags.1?true"
        }, {"name": "user_id", "type": "InputUser"}, {"name": "title", "type": "string"}, {
            "name": "short_name",
            "type": "string"
        }, {"name": "thumb", "type": "flags.2?InputDocument"}, {
            "name": "stickers",
            "type": "Vector<InputStickerSetItem>"
        }],
        "type": "messages.StickerSet"
    }, {
        "@": API,
        "id": "-143257775",
        "method": "stickers.removeStickerFromSet",
        "params": [{"name": "sticker", "type": "InputDocument"}],
        "type": "messages.StickerSet"
    }, {
        "@": API,
        "id": "-4795190",
        "method": "stickers.changeStickerPosition",
        "params": [{"name": "sticker", "type": "InputDocument"}, {"name": "position", "type": "int"}],
        "type": "messages.StickerSet"
    }, {
        "@": API,
        "id": "-2041315650",
        "method": "stickers.addStickerToSet",
        "params": [{"name": "stickerset", "type": "InputStickerSet"}, {
            "name": "sticker",
            "type": "InputStickerSetItem"
        }],
        "type": "messages.StickerSet"
    }, {
        "@": API,
        "id": "1369162417",
        "method": "messages.uploadMedia",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "media", "type": "InputMedia"}],
        "type": "MessageMedia"
    }, {"id": "1430593449", "method": "phone.getCallConfig", "params": [], "type": "DataJSON"}, {
        "@": API,
        "id": "1124046573",
        "method": "phone.requestCall",
        "params": [{"name": "flags", "type": "#"}, {"name": "video", "type": "flags.0?true"}, {
            "name": "user_id",
            "type": "InputUser"
        }, {"name": "random_id", "type": "int"}, {"name": "g_a_hash", "type": "bytes"}, {
            "name": "protocol",
            "type": "PhoneCallProtocol"
        }],
        "type": "phone.PhoneCall"
    }, {
        "@": API,
        "id": "1003664544",
        "method": "phone.acceptCall",
        "params": [{"name": "peer", "type": "InputPhoneCall"}, {"name": "g_b", "type": "bytes"}, {
            "name": "protocol",
            "type": "PhoneCallProtocol"
        }],
        "type": "phone.PhoneCall"
    }, {
        "@": API,
        "id": "788404002",
        "method": "phone.confirmCall",
        "params": [{"name": "peer", "type": "InputPhoneCall"}, {
            "name": "g_a",
            "type": "bytes"
        }, {"name": "key_fingerprint", "type": "long"}, {"name": "protocol", "type": "PhoneCallProtocol"}],
        "type": "phone.PhoneCall"
    }, {
        "@": API,
        "id": "399855457",
        "method": "phone.receivedCall",
        "params": [{"name": "peer", "type": "InputPhoneCall"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-1295269440",
        "method": "phone.discardCall",
        "params": [{"name": "flags", "type": "#"}, {"name": "video", "type": "flags.0?true"}, {
            "name": "peer",
            "type": "InputPhoneCall"
        }, {"name": "duration", "type": "int"}, {
            "name": "reason",
            "type": "PhoneCallDiscardReason"
        }, {"name": "connection_id", "type": "long"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "1508562471",
        "method": "phone.setCallRating",
        "params": [{"name": "flags", "type": "#"}, {"name": "user_initiative", "type": "flags.0?true"}, {
            "name": "peer",
            "type": "InputPhoneCall"
        }, {"name": "rating", "type": "int"}, {"name": "comment", "type": "string"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "662363518",
        "method": "phone.saveCallDebug",
        "params": [{"name": "peer", "type": "InputPhoneCall"}, {"name": "debug", "type": "DataJSON"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "536919235",
        "method": "upload.getCdnFile",
        "params": [{"name": "file_token", "type": "bytes"}, {"name": "offset", "type": "int"}, {
            "name": "limit",
            "type": "int"
        }],
        "type": "upload.CdnFile"
    }, {
        "@": API,
        "id": "-1691921240",
        "method": "upload.reuploadCdnFile",
        "params": [{"name": "file_token", "type": "bytes"}, {"name": "request_token", "type": "bytes"}],
        "type": "Vector<FileHash>"
    }, {"id": "1375900482", "method": "help.getCdnConfig", "params": [], "type": "CdnConfig"}, {
        "@": API,
        "id": "-219008246",
        "method": "langpack.getLangPack",
        "params": [{"name": "lang_pack", "type": "string"}, {"name": "lang_code", "type": "string"}],
        "type": "LangPackDifference"
    }, {
        "@": API,
        "id": "-269862909",
        "method": "langpack.getStrings",
        "params": [{"name": "lang_pack", "type": "string"}, {"name": "lang_code", "type": "string"}, {
            "name": "keys",
            "type": "Vector<string>"
        }],
        "type": "Vector<LangPackString>"
    }, {
        "@": API,
        "id": "-845657435",
        "method": "langpack.getDifference",
        "params": [{"name": "lang_pack", "type": "string"}, {
            "name": "lang_code",
            "type": "string"
        }, {"name": "from_version", "type": "int"}],
        "type": "LangPackDifference"
    }, {
        "@": API,
        "id": "1120311183",
        "method": "langpack.getLanguages",
        "params": [{"name": "lang_pack", "type": "string"}],
        "type": "Vector<LangPackLanguage>"
    }, {
        "@": API,
        "id": "1920559378",
        "method": "channels.editBanned",
        "params": [{"name": "channel", "type": "InputChannel"}, {
            "name": "user_id",
            "type": "InputUser"
        }, {"name": "banned_rights", "type": "ChatBannedRights"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "870184064",
        "method": "channels.getAdminLog",
        "params": [{"name": "flags", "type": "#"}, {"name": "channel", "type": "InputChannel"}, {
            "name": "q",
            "type": "string"
        }, {"name": "events_filter", "type": "flags.0?ChannelAdminLogEventsFilter"}, {
            "name": "admins",
            "type": "flags.1?Vector<InputUser>"
        }, {"name": "max_id", "type": "long"}, {"name": "min_id", "type": "long"}, {"name": "limit", "type": "int"}],
        "type": "channels.AdminLogResults"
    }, {
        "@": API,
        "id": "1302676017",
        "method": "upload.getCdnFileHashes",
        "params": [{"name": "file_token", "type": "bytes"}, {"name": "offset", "type": "int"}],
        "type": "Vector<FileHash>"
    }, {
        "@": API,
        "id": "-914493408",
        "method": "messages.sendScreenshotNotification",
        "params": [{"name": "peer", "type": "InputPeer"}, {
            "name": "reply_to_msg_id",
            "type": "int"
        }, {"name": "random_id", "type": "long"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-359881479",
        "method": "channels.setStickers",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "stickerset", "type": "InputStickerSet"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "567151374",
        "method": "messages.getFavedStickers",
        "params": [{"name": "hash", "type": "int"}],
        "type": "messages.FavedStickers"
    }, {
        "@": API,
        "id": "-1174420133",
        "method": "messages.faveSticker",
        "params": [{"name": "id", "type": "InputDocument"}, {"name": "unfave", "type": "Bool"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-357180360",
        "method": "channels.readMessageContents",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "id", "type": "Vector<int>"}],
        "type": "Bool"
    }, {"id": "-2020263951", "method": "contacts.resetSaved", "params": [], "type": "Bool"}, {
        "@": API,
        "id": "1180140658",
        "method": "messages.getUnreadMentions",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "offset_id", "type": "int"}, {
            "name": "add_offset",
            "type": "int"
        }, {"name": "limit", "type": "int"}, {"name": "max_id", "type": "int"}, {"name": "min_id", "type": "int"}],
        "type": "messages.Messages"
    }, {
        "@": API,
        "id": "-1355375294",
        "method": "channels.deleteHistory",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "max_id", "type": "int"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "1036054804",
        "method": "help.getRecentMeUrls",
        "params": [{"name": "referer", "type": "string"}],
        "type": "help.RecentMeUrls"
    }, {
        "@": API,
        "id": "-356796084",
        "method": "channels.togglePreHistoryHidden",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "enabled", "type": "Bool"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "251759059",
        "method": "messages.readMentions",
        "params": [{"name": "peer", "type": "InputPeer"}],
        "type": "messages.AffectedHistory"
    }, {
        "@": API,
        "id": "-1144759543",
        "method": "messages.getRecentLocations",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "limit", "type": "int"}, {
            "name": "hash",
            "type": "int"
        }],
        "type": "messages.Messages"
    }, {
        "@": API,
        "id": "-872345397",
        "method": "messages.sendMultiMedia",
        "params": [{"name": "flags", "type": "#"}, {"name": "silent", "type": "flags.5?true"}, {
            "name": "background",
            "type": "flags.6?true"
        }, {"name": "clear_draft", "type": "flags.7?true"}, {
            "name": "peer",
            "type": "InputPeer"
        }, {"name": "reply_to_msg_id", "type": "flags.0?int"}, {
            "name": "multi_media",
            "type": "Vector<InputSingleMedia>"
        }, {"name": "schedule_date", "type": "flags.10?int"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "1347929239",
        "method": "messages.uploadEncryptedFile",
        "params": [{"name": "peer", "type": "InputEncryptedChat"}, {"name": "file", "type": "InputEncryptedFile"}],
        "type": "EncryptedFile"
    }, {
        "@": API,
        "id": "405695855",
        "method": "account.getWebAuthorizations",
        "params": [],
        "type": "account.WebAuthorizations"
    }, {
        "@": API,
        "id": "755087855",
        "method": "account.resetWebAuthorization",
        "params": [{"name": "hash", "type": "long"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "1747789204",
        "method": "account.resetWebAuthorizations",
        "params": [],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-1028140917",
        "method": "messages.searchStickerSets",
        "params": [{"name": "flags", "type": "#"}, {"name": "exclude_featured", "type": "flags.0?true"}, {
            "name": "q",
            "type": "string"
        }, {"name": "hash", "type": "int"}],
        "type": "messages.FoundStickerSets"
    }, {
        "@": API,
        "id": "-956147407",
        "method": "upload.getFileHashes",
        "params": [{"name": "location", "type": "InputFileLocation"}, {"name": "offset", "type": "int"}],
        "type": "Vector<FileHash>"
    }, {
        "@": API,
        "id": "749019089",
        "method": "help.getTermsOfServiceUpdate",
        "params": [],
        "type": "help.TermsOfServiceUpdate"
    }, {
        "@": API,
        "id": "-294455398",
        "method": "help.acceptTermsOfService",
        "params": [{"name": "id", "type": "DataJSON"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-1299661699",
        "method": "account.getAllSecureValues",
        "params": [],
        "type": "Vector<SecureValue>"
    }, {
        "@": API,
        "id": "1936088002",
        "method": "account.getSecureValue",
        "params": [{"name": "types", "type": "Vector<SecureValueType>"}],
        "type": "Vector<SecureValue>"
    }, {
        "@": API,
        "id": "-1986010339",
        "method": "account.saveSecureValue",
        "params": [{"name": "value", "type": "InputSecureValue"}, {"name": "secure_secret_id", "type": "long"}],
        "type": "SecureValue"
    }, {
        "@": API,
        "id": "-1199522741",
        "method": "account.deleteSecureValue",
        "params": [{"name": "types", "type": "Vector<SecureValueType>"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-1865902923",
        "method": "users.setSecureValueErrors",
        "params": [{"name": "id", "type": "InputUser"}, {"name": "errors", "type": "Vector<SecureValueError>"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-1200903967",
        "method": "account.getAuthorizationForm",
        "params": [{"name": "bot_id", "type": "int"}, {"name": "scope", "type": "string"}, {
            "name": "public_key",
            "type": "string"
        }],
        "type": "account.AuthorizationForm"
    }, {
        "@": API,
        "id": "-419267436",
        "method": "account.acceptAuthorization",
        "params": [{"name": "bot_id", "type": "int"}, {"name": "scope", "type": "string"}, {
            "name": "public_key",
            "type": "string"
        }, {"name": "value_hashes", "type": "Vector<SecureValueHash>"}, {
            "name": "credentials",
            "type": "SecureCredentialsEncrypted"
        }],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-1516022023",
        "method": "account.sendVerifyPhoneCode",
        "params": [{"name": "phone_number", "type": "string"}, {"name": "settings", "type": "CodeSettings"}],
        "type": "auth.SentCode"
    }, {
        "@": API,
        "id": "1305716726",
        "method": "account.verifyPhone",
        "params": [{"name": "phone_number", "type": "string"}, {
            "name": "phone_code_hash",
            "type": "string"
        }, {"name": "phone_code", "type": "string"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "1880182943",
        "method": "account.sendVerifyEmailCode",
        "params": [{"name": "email", "type": "string"}],
        "type": "account.SentEmailCode"
    }, {
        "@": API,
        "id": "-323339813",
        "method": "account.verifyEmail",
        "params": [{"name": "email", "type": "string"}, {"name": "code", "type": "string"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "1072547679",
        "method": "help.getDeepLinkInfo",
        "params": [{"name": "path", "type": "string"}],
        "type": "help.DeepLinkInfo"
    }, {
        "@": API,
        "id": "-2098076769",
        "method": "contacts.getSaved",
        "params": [],
        "type": "Vector<SavedContact>"
    }, {
        "@": API,
        "id": "-2092831552",
        "method": "channels.getLeftChannels",
        "params": [{"name": "offset", "type": "int"}],
        "type": "messages.Chats"
    }, {
        "@": API,
        "id": "-262453244",
        "method": "account.initTakeoutSession",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "contacts",
            "type": "flags.0?true"
        }, {"name": "message_users", "type": "flags.1?true"}, {
            "name": "message_chats",
            "type": "flags.2?true"
        }, {"name": "message_megagroups", "type": "flags.3?true"}, {
            "name": "message_channels",
            "type": "flags.4?true"
        }, {"name": "files", "type": "flags.5?true"}, {"name": "file_max_size", "type": "flags.5?int"}],
        "type": "account.Takeout"
    }, {
        "@": API,
        "id": "489050862",
        "method": "account.finishTakeoutSession",
        "params": [{"name": "flags", "type": "#"}, {"name": "success", "type": "flags.0?true"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "486505992",
        "method": "messages.getSplitRanges",
        "params": [],
        "type": "Vector<MessageRange>"
    }, {
        "@": API,
        "id": "911373810",
        "method": "invokeWithMessagesRange",
        "params": [{"name": "range", "type": "MessageRange"}, {"name": "query", "type": "!X"}],
        "type": "X"
    }, {
        "@": API,
        "id": "-1398145746",
        "method": "invokeWithTakeout",
        "params": [{"name": "takeout_id", "type": "long"}, {"name": "query", "type": "!X"}],
        "type": "X"
    }, {
        "@": API,
        "id": "-1031349873",
        "method": "messages.markDialogUnread",
        "params": [{"name": "flags", "type": "#"}, {"name": "unread", "type": "flags.0?true"}, {
            "name": "peer",
            "type": "InputDialogPeer"
        }],
        "type": "Bool"
    }, {
        "@": API,
        "id": "585256482",
        "method": "messages.getDialogUnreadMarks",
        "params": [],
        "type": "Vector<DialogPeer>"
    }, {
        "@": API,
        "id": "-2062238246",
        "method": "contacts.toggleTopPeers",
        "params": [{"name": "enabled", "type": "Bool"}],
        "type": "Bool"
    }, {"id": "2119757468", "method": "messages.clearAllDrafts", "params": [], "type": "Bool"}, {
        "@": API,
        "id": "-1735311088",
        "method": "help.getAppConfig",
        "params": [],
        "type": "JSONValue"
    }, {
        "@": API,
        "id": "1862465352",
        "method": "help.saveAppLog",
        "params": [{"name": "events", "type": "Vector<InputAppEvent>"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-966677240",
        "method": "help.getPassportConfig",
        "params": [{"name": "hash", "type": "int"}],
        "type": "help.PassportConfig"
    }, {
        "@": API,
        "id": "1784243458",
        "method": "langpack.getLanguage",
        "params": [{"name": "lang_pack", "type": "string"}, {"name": "lang_code", "type": "string"}],
        "type": "LangPackLanguage"
    }, {
        "@": API,
        "id": "-760547348",
        "method": "messages.updatePinnedMessage",
        "params": [{"name": "flags", "type": "#"}, {"name": "silent", "type": "flags.0?true"}, {
            "name": "peer",
            "type": "InputPeer"
        }, {"name": "id", "type": "int"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-1881204448",
        "method": "account.confirmPasswordEmail",
        "params": [{"name": "code", "type": "string"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "2055154197",
        "method": "account.resendPasswordEmail",
        "params": [],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-1043606090",
        "method": "account.cancelPasswordEmail",
        "params": [],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-748624084",
        "method": "help.getSupportName",
        "params": [],
        "type": "help.SupportName"
    }, {
        "@": API,
        "id": "59377875",
        "method": "help.getUserInfo",
        "params": [{"name": "user_id", "type": "InputUser"}],
        "type": "help.UserInfo"
    }, {
        "@": API,
        "id": "1723407216",
        "method": "help.editUserInfo",
        "params": [{"name": "user_id", "type": "InputUser"}, {"name": "message", "type": "string"}, {
            "name": "entities",
            "type": "Vector<MessageEntity>"
        }],
        "type": "help.UserInfo"
    }, {
        "@": API,
        "id": "-1626880216",
        "method": "account.getContactSignUpNotification",
        "params": [],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-806076575",
        "method": "account.setContactSignUpNotification",
        "params": [{"name": "silent", "type": "Bool"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "1398240377",
        "method": "account.getNotifyExceptions",
        "params": [{"name": "flags", "type": "#"}, {"name": "compare_sound", "type": "flags.1?true"}, {
            "name": "peer",
            "type": "flags.0?InputNotifyPeer"
        }],
        "type": "Updates"
    }, {
        "@": API,
        "id": "283795844",
        "method": "messages.sendVote",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "msg_id", "type": "int"}, {
            "name": "options",
            "type": "Vector<bytes>"
        }],
        "type": "Updates"
    }, {
        "@": API,
        "id": "1941660731",
        "method": "messages.getPollResults",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "msg_id", "type": "int"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "1848369232",
        "method": "messages.getOnlines",
        "params": [{"name": "peer", "type": "InputPeer"}],
        "type": "ChatOnlines"
    }, {
        "@": API,
        "id": "-2127811866",
        "method": "messages.getStatsURL",
        "params": [{"name": "flags", "type": "#"}, {"name": "dark", "type": "flags.0?true"}, {
            "name": "peer",
            "type": "InputPeer"
        }, {"name": "params", "type": "string"}],
        "type": "StatsURL"
    }, {
        "@": API,
        "id": "-554301545",
        "method": "messages.editChatAbout",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "about", "type": "string"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-1517917375",
        "method": "messages.editChatDefaultBannedRights",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "banned_rights", "type": "ChatBannedRights"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-57811990",
        "method": "account.getWallPaper",
        "params": [{"name": "wallpaper", "type": "InputWallPaper"}],
        "type": "WallPaper"
    }, {
        "@": API,
        "id": "-578472351",
        "method": "account.uploadWallPaper",
        "params": [{"name": "file", "type": "InputFile"}, {"name": "mime_type", "type": "string"}, {
            "name": "settings",
            "type": "WallPaperSettings"
        }],
        "type": "WallPaper"
    }, {
        "@": API,
        "id": "1817860919",
        "method": "account.saveWallPaper",
        "params": [{"name": "wallpaper", "type": "InputWallPaper"}, {
            "name": "unsave",
            "type": "Bool"
        }, {"name": "settings", "type": "WallPaperSettings"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-18000023",
        "method": "account.installWallPaper",
        "params": [{"name": "wallpaper", "type": "InputWallPaper"}, {"name": "settings", "type": "WallPaperSettings"}],
        "type": "Bool"
    }, {"id": "-1153722364", "method": "account.resetWallPapers", "params": [], "type": "Bool"}, {
        "@": API,
        "id": "1457130303",
        "method": "account.getAutoDownloadSettings",
        "params": [],
        "type": "account.AutoDownloadSettings"
    }, {
        "@": API,
        "id": "1995661875",
        "method": "account.saveAutoDownloadSettings",
        "params": [{"name": "flags", "type": "#"}, {"name": "low", "type": "flags.0?true"}, {
            "name": "high",
            "type": "flags.1?true"
        }, {"name": "settings", "type": "AutoDownloadSettings"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "899735650",
        "method": "messages.getEmojiKeywords",
        "params": [{"name": "lang_code", "type": "string"}],
        "type": "EmojiKeywordsDifference"
    }, {
        "@": API,
        "id": "352892591",
        "method": "messages.getEmojiKeywordsDifference",
        "params": [{"name": "lang_code", "type": "string"}, {"name": "from_version", "type": "int"}],
        "type": "EmojiKeywordsDifference"
    }, {
        "@": API,
        "id": "1318675378",
        "method": "messages.getEmojiKeywordsLanguages",
        "params": [{"name": "lang_codes", "type": "Vector<string>"}],
        "type": "Vector<EmojiLanguage>"
    }, {
        "@": API,
        "id": "-709817306",
        "method": "messages.getEmojiURL",
        "params": [{"name": "lang_code", "type": "string"}],
        "type": "EmojiURL"
    }, {
        "@": API,
        "id": "1749536939",
        "method": "folders.editPeerFolders",
        "params": [{"name": "folder_peers", "type": "Vector<InputFolderPeer>"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "472471681",
        "method": "folders.deleteFolder",
        "params": [{"name": "folder_id", "type": "int"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "1932455680",
        "method": "messages.getSearchCounters",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "filters", "type": "Vector<MessagesFilter>"}],
        "type": "Vector<messages.SearchCounter>"
    }, {
        "@": API,
        "id": "-170208392",
        "method": "channels.getGroupsForDiscussion",
        "params": [],
        "type": "messages.Chats"
    }, {
        "@": API,
        "id": "1079520178",
        "method": "channels.setDiscussionGroup",
        "params": [{"name": "broadcast", "type": "InputChannel"}, {"name": "group", "type": "InputChannel"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-482388461",
        "method": "messages.requestUrlAuth",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "msg_id", "type": "int"}, {
            "name": "button_id",
            "type": "int"
        }],
        "type": "UrlAuthResult"
    }, {
        "@": API,
        "id": "-148247912",
        "method": "messages.acceptUrlAuth",
        "params": [{"name": "flags", "type": "#"}, {"name": "write_allowed", "type": "flags.0?true"}, {
            "name": "peer",
            "type": "InputPeer"
        }, {"name": "msg_id", "type": "int"}, {"name": "button_id", "type": "int"}],
        "type": "UrlAuthResult"
    }, {
        "@": API,
        "id": "1336717624",
        "method": "messages.hidePeerSettingsBar",
        "params": [{"name": "peer", "type": "InputPeer"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-386636848",
        "method": "contacts.addContact",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "add_phone_privacy_exception",
            "type": "flags.0?true"
        }, {"name": "id", "type": "InputUser"}, {"name": "first_name", "type": "string"}, {
            "name": "last_name",
            "type": "string"
        }, {"name": "phone", "type": "string"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-130964977",
        "method": "contacts.acceptContact",
        "params": [{"name": "id", "type": "InputUser"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-1892102881",
        "method": "channels.editCreator",
        "params": [{"name": "channel", "type": "InputChannel"}, {
            "name": "user_id",
            "type": "InputUser"
        }, {"name": "password", "type": "InputCheckPasswordSRP"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-750207932",
        "method": "contacts.getLocated",
        "params": [{"name": "flags", "type": "#"}, {"name": "background", "type": "flags.1?true"}, {
            "name": "geo_point",
            "type": "InputGeoPoint"
        }, {"name": "self_expires", "type": "flags.0?int"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "1491484525",
        "method": "channels.editLocation",
        "params": [{"name": "channel", "type": "InputChannel"}, {
            "name": "geo_point",
            "type": "InputGeoPoint"
        }, {"name": "address", "type": "string"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-304832784",
        "method": "channels.toggleSlowMode",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "seconds", "type": "int"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "-490575781",
        "method": "messages.getScheduledHistory",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "hash", "type": "int"}],
        "type": "messages.Messages"
    }, {
        "@": API,
        "id": "-1111817116",
        "method": "messages.getScheduledMessages",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "id", "type": "Vector<int>"}],
        "type": "messages.Messages"
    }, {
        "@": API,
        "id": "-1120369398",
        "method": "messages.sendScheduledMessages",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "id", "type": "Vector<int>"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "1504586518",
        "method": "messages.deleteScheduledMessages",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "id", "type": "Vector<int>"}],
        "type": "Updates"
    }, {
        "@": API,
        "id": "473805619",
        "method": "account.uploadTheme",
        "params": [{"name": "flags", "type": "#"}, {"name": "file", "type": "InputFile"}, {
            "name": "thumb",
            "type": "flags.0?InputFile"
        }, {"name": "file_name", "type": "string"}, {"name": "mime_type", "type": "string"}],
        "type": "Document"
    }, {
        "@": API,
        "id": "-2077048289",
        "method": "account.createTheme",
        "params": [{"name": "flags", "type": "#"}, {"name": "slug", "type": "string"}, {
            "name": "title",
            "type": "string"
        }, {"name": "document", "type": "flags.2?InputDocument"}, {
            "name": "settings",
            "type": "flags.3?InputThemeSettings"
        }],
        "type": "Theme"
    }, {
        "@": API,
        "id": "1555261397",
        "method": "account.updateTheme",
        "params": [{"name": "flags", "type": "#"}, {"name": "format", "type": "string"}, {
            "name": "theme",
            "type": "InputTheme"
        }, {"name": "slug", "type": "flags.0?string"}, {"name": "title", "type": "flags.1?string"}, {
            "name": "document",
            "type": "flags.2?InputDocument"
        }, {"name": "settings", "type": "flags.3?InputThemeSettings"}],
        "type": "Theme"
    }, {
        "@": API,
        "id": "-229175188",
        "method": "account.saveTheme",
        "params": [{"name": "theme", "type": "InputTheme"}, {"name": "unsave", "type": "Bool"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "2061776695",
        "method": "account.installTheme",
        "params": [{"name": "flags", "type": "#"}, {"name": "dark", "type": "flags.0?true"}, {
            "name": "format",
            "type": "flags.1?string"
        }, {"name": "theme", "type": "flags.1?InputTheme"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-1919060949",
        "method": "account.getTheme",
        "params": [{"name": "format", "type": "string"}, {
            "name": "theme",
            "type": "InputTheme"
        }, {"name": "document_id", "type": "long"}],
        "type": "Theme"
    }, {
        "@": API,
        "id": "676939512",
        "method": "account.getThemes",
        "params": [{"name": "format", "type": "string"}, {"name": "hash", "type": "int"}],
        "type": "account.Themes"
    }, {
        "@": API,
        "id": "-1313598185",
        "method": "auth.exportLoginToken",
        "params": [{"name": "api_id", "type": "int"}, {"name": "api_hash", "type": "string"}, {
            "name": "except_ids",
            "type": "Vector<int>"
        }],
        "type": "auth.LoginToken"
    }, {
        "@": API,
        "id": "-1783866140",
        "method": "auth.importLoginToken",
        "params": [{"name": "token", "type": "bytes"}],
        "type": "auth.LoginToken"
    }, {
        "@": API,
        "id": "-392909491",
        "method": "auth.acceptLoginToken",
        "params": [{"name": "token", "type": "bytes"}],
        "type": "Authorization"
    }, {
        "@": API,
        "id": "-1250643605",
        "method": "account.setContentSettings",
        "params": [{"name": "flags", "type": "#"}, {"name": "sensitive_enabled", "type": "flags.0?true"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-1952756306",
        "method": "account.getContentSettings",
        "params": [],
        "type": "account.ContentSettings"
    }, {
        "@": API,
        "id": "300429806",
        "method": "channels.getInactiveChannels",
        "params": [],
        "type": "messages.InactiveChats"
    }, {
        "@": API,
        "id": "1705865692",
        "method": "account.getMultiWallPapers",
        "params": [{"name": "wallpapers", "type": "Vector<InputWallPaper>"}],
        "type": "Vector<WallPaper>"
    }, {
        "@": API,
        "id": "-1200736242",
        "method": "messages.getPollVotes",
        "params": [{"name": "flags", "type": "#"}, {"name": "peer", "type": "InputPeer"}, {
            "name": "id",
            "type": "int"
        }, {"name": "option", "type": "flags.0?bytes"}, {"name": "offset", "type": "flags.1?string"}, {
            "name": "limit",
            "type": "int"
        }],
        "type": "messages.VotesList"
    }, {
        "@": API,
        "id": "-1257951254",
        "method": "messages.toggleStickerSets",
        "params": [{"name": "flags", "type": "#"}, {"name": "uninstall", "type": "flags.0?true"}, {
            "name": "archive",
            "type": "flags.1?true"
        }, {"name": "unarchive", "type": "flags.2?true"}, {"name": "stickersets", "type": "Vector<InputStickerSet>"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "779736953",
        "method": "payments.getBankCardData",
        "params": [{"name": "number", "type": "string"}],
        "type": "payments.BankCardData"
    }, {
        "@": API,
        "id": "-241247891",
        "method": "messages.getDialogFilters",
        "params": [],
        "type": "Vector<DialogFilter>"
    }, {
        "@": API,
        "id": "-1566780372",
        "method": "messages.getSuggestedDialogFilters",
        "params": [],
        "type": "Vector<DialogFilterSuggested>"
    }, {
        "@": API,
        "id": "450142282",
        "method": "messages.updateDialogFilter",
        "params": [{"name": "flags", "type": "#"}, {"name": "id", "type": "int"}, {
            "name": "filter",
            "type": "flags.0?DialogFilter"
        }],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-983318044",
        "method": "messages.updateDialogFiltersOrder",
        "params": [{"name": "order", "type": "Vector<int>"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "-1421720550",
        "method": "stats.getBroadcastStats",
        "params": [{"name": "flags", "type": "#"}, {"name": "dark", "type": "flags.0?true"}, {
            "name": "channel",
            "type": "InputChannel"
        }],
        "type": "stats.BroadcastStats"
    }, {
        "@": API,
        "id": "1646092192",
        "method": "stats.loadAsyncGraph",
        "params": [{"name": "flags", "type": "#"}, {"name": "token", "type": "string"}, {
            "name": "x",
            "type": "flags.0?long"
        }],
        "type": "StatsGraph"
    }, {
        "@": API,
        "id": "-1707717072",
        "method": "stickers.setStickerSetThumb",
        "params": [{"name": "stickerset", "type": "InputStickerSet"}, {"name": "thumb", "type": "InputDocument"}],
        "type": "messages.StickerSet"
    }, {
        "@": API,
        "id": "-2141370634",
        "method": "bots.setBotCommands",
        "params": [{"name": "commands", "type": "Vector<BotCommand>"}],
        "type": "Bool"
    }, {
        "@": API,
        "id": "1608974939",
        "method": "messages.getOldFeaturedStickers",
        "params": [{"name": "offset", "type": "int"}, {"name": "limit", "type": "int"}, {
            "name": "hash",
            "type": "int"
        }],
        "type": "messages.FeaturedStickers"
    }, {"id": "-1063816159", "method": "help.getPromoData", "params": [], "type": "help.PromoData"}, {
        "@": API,
        "id": "505748629",
        "method": "help.hidePromoData",
        "params": [{"name": "peer", "type": "InputPeer"}],
        "type": "Bool"
    }]
};