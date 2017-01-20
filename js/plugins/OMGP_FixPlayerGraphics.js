
//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃ ★ プラグインの導入行程　　　　　　　　　　　　　　　　　　　　　　　　┃
//┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
//┃ １：この画面上で CTRL キーを押しながらキーボードの S ボタン！　　　　　┃
//┃ ２：次に Games > ゲームプロジェクト名 > js > plugins フォルダに保存！　┃
//┃ ３：保存名は OMGP_FixPlayerGraphics でないと使えません！　　　　　　 　┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

/*:ja
 * @plugindesc
 * マップ上に表示させるプレイヤーグラフィックを固定します。
 * 
 * @author ゆう
 * 
 * @param fixActorId
 * @desc 固定させるアクター ID
 * @default 1
 * 
 * @help
 * 
 * ┏━: Var.1.0.0  OMGP_FixPlayerGraphics プラグイン :━━━━━━━━━━━┓
 * ┃利用環境：RPGツクールMV                            　         　 　　   ┃
 * ┃制 作 者：ゆう                                               　　　     ┃
 * ┃配 布 元：オメガポインタ　　　　　　　　　　　　　　　　　　　　　　　　┃
 * ┃　　　　　http://omegapointer.blog.fc2.com/blog-entry-1.html        　  ┃
 * ┃Twitter ：https://twitter.com/omgpointer                                ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * ┏━: 注意点 :━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃存在しないアクター ID は指定しないでください。　　　　　　　　　　　    ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * 
 * ★ できることリスト
 * 
 *   ◆ fixActorId（デフォルト値：1）
 *   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *    プレイヤーのグラフィックを固定させるアクター ID を指定します。
 * 
 * 
 * 
 * 
 * 
 * 
 * -- endLine --
 */

  Game_Party.prototype.leader = function() { return $gameActors.actor(Number(PluginManager.parameters('OMGP_FixPlayerGraphics').fixActorId)); };

// -- endLine --